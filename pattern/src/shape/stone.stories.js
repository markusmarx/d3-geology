import Logger from 'js-logger'
import * as d3 from 'd3'
import stone from './stone'

Logger.useDefaults();

export default {
  title: 'Shapes/Stone',
  argTypes: {
  },
};

export const Simple = () => {

  const svgElem = document.createElement('svg');
  const svg = d3.select(svgElem)
    .attr("width", '200')
    .attr("height", '200');

  svg.call(stone());

  return `<svg width="200" height="200">` + svg.html() + `</svg>`;
}