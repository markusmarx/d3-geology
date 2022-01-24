import hydrograph from './index'
import * as d3 from "d3";

const width = 800;
const height = 600;
const margin = 50;

function buildSvg() {
  const svgElem = document.createElement('svg');
  const svg = d3.select(svgElem)
    .attr('width', width + (margin * 2))
    .attr('height', height + (margin * 2))
    .append('g')
    .attr('transform', 'translate(' + margin + ',' + margin + ')');
  return svg;
}

function render(svg) {
  return `<svg width="`+ ( width + (margin * 2)) +`" height="` + (height + (margin * 2)) + `"><g transform="translate(` + margin + `,` + margin + `)">` + svg.html() + `</g></svg>`;
}

export default {
  title: 'Hydrograph',
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
  const svg = buildSvg();
  hydrograph(svg, data, width, height, margin)
  return render(svg);
};

export const Simple = Template.bind({});

const data = {
  data: [
    {
      name: '122223/Q3',
      color: '#e41a1c',
      data: [
        {
          date: new Date('1998-01-01T00:00:00'),
          value: 139
        },
        {
          date: new Date('1999-01-01T00:00:00'),
          value: 142.5
        },
        {
          date: new Date('2000-01-01T00:00:00'),
          value: 140.3
        },
        {
          date: new Date('2001-01-01T00:00:00'),
          value: 140.3
        },
        {
          date: new Date('2002-01-01T00:00:00'),
          value: 144
        },
      ]
    },
    {
      name: '122223/Q4',
      color: '#377eb8',
      data: [
        {
          date: new Date('1998-01-01T00:00:00'),
          value: 140
        },
        {
          date: new Date('1999-01-01T00:00:00'),
          value: 136.5
        },
        {
          date: new Date('2000-01-01T00:00:00'),
          value: 138.4
        },
        {
          date: new Date('2001-01-01T00:00:00'),
          value: 139.3
        },
        {
          date: new Date('2002-01-01T00:00:00'),
          value: 149.3
        },
      ]
    }
  ]
};