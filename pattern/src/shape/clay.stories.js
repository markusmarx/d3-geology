import Logger from 'js-logger'
import * as d3 from 'd3'
import clay from './clay'

Logger.useDefaults();

export default {
  title: 'Shapes/Clay',
  argTypes: {
  },
};

export const Simple = () => {

  const svgElem = document.createElement('svg');
  const svg = d3.select(svgElem)
    .attr("width", '200')
    .attr("height", '200');

  svg.call(clay());

  return `<svg width="200" height="200">` + svg.html() + `</svg>`;
}