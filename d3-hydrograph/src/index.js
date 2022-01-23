import * as d3 from 'd3';
import { findDin4023Def, pattern } from '@d3-geology/pattern'

export default function (svg, data, width, height, margin) {

  const extendsYValue = [];
  const extendsXValue = [];

  data.data.forEach((value) => {
    extendsYValue.push(...d3.extent(value.data, (d) => d.value));
    extendsXValue.push(...d3.extent(value.data, (d) => d.date));
  });

  const days = d3.scaleLinear()
    .domain(d3.extent(extendsXValue))
    .range([0, width]);

  // Add Y axis
  const y = d3.scaleLinear()
    .domain(d3.extent(extendsYValue, (d) => d)).nice(2)
    .range([ height, 0]);

  svg.selectAll('.rect')
    .data([{start: 136, end: 137.5, din4023: 'kies'}, {start: 137.5, end: 140, din4023: 'sand'}, {start: 140, end: 145, din4023: 'schluff'}])
    .enter().append('rect')
    .attr('fill', (d) => pattern()
      .size(100).texture(findDin4023Def(d.din4023)).render(svg).url())
    .attr('x', (d) => 0)
    .attr('y', (d) => y(d.end))
    .attr('width', width)
    .attr('height', (d) => y(d.start) - y(d.end));

  svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(days)
      .tickFormat(d3.timeFormat('%m.%Y'))
      .tickValues(data.data[0].data.map((d) => d.date)));

  svg.append('g').call(d3.axisLeft(y));

  svg.selectAll('.line')
    .data(data.data)
    .enter()
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', (d) => d3.color(d.color) )
    .attr('stroke-width', 2)
    .attr('d', d => {
      return d3.line()
        .x((d1) => days(d1.date))
        .y((d1) => y(d1.value))(d.data);
    });

  // Add X axis label:
  svg.append('text')
    .attr('text-anchor', 'end')
    .attr('x', width)
    .attr('y', height + margin)
    .text('Datum');

  // Y axis label:
  svg.append('text')
    .attr('text-anchor', 'end')
    .attr('transform', 'rotate(-90)')
    .attr('y', -30)
    .attr('x', - margin)
    .text('Wasserstand in mMHN');
}

