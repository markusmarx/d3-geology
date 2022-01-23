import * as d3 from 'd3'

export default function renderTexture(pattern) {
  const svgElem = document.createElement('svg');
  const svg = d3.select(svgElem)
    .attr("width", '200')
    .attr("height", '200');

  svg.call(pattern);
  svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 100)
    .attr('stroke', 'black')
    .attr('fill', pattern.url());

  return `<svg width="200" height="200">` + svg.html() + `</svg>`;
}