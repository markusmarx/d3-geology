import pattern from './pattern'
import * as d3 from "d3";

export default {
  title: 'Pattern/pattern',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = ({ label, ...args }) => {
  let pattern1 = pattern()
    .background('yellow');

  const svgElem = document.createElement('svg');
  const svg = d3.select(svgElem)
    .attr("width", '100')
    .attr("height", '100');

  svg.call(pattern1);
  svg.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 40)
    .attr('stroke', 'black')
    .attr('fill', pattern1.url());

  return `<svg width="100" height="100">` + svg.html() + `</svg>`;
};

export const Simple = Template.bind({});