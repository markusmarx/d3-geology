

export default function renderToSvg(selection, pattern) {
    return selection
      .append('defs')
      .append('pattern')
          .attr('id', pattern.id)
          .attr('patternUnits', 'userSpaceOnUse')
          .attr('width', pattern.size)
          .attr('height', pattern.size);
}