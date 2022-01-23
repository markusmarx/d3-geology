export const appendCircle = (selection, cx, cy, r, stroke, fill) => {
  return selection.append('circle')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', r)
    .attr('stroke', stroke)
    .attr('fill', fill);
}

export const appendLine = (selection, x1, y1, x2, y2, stroke) => {
  return selection.append('line')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke', stroke)
}

export const appendPolyline = (selection, points, style) => {
  return selection.append('polyline')
    .attr('points', points.map((p) => p.join(',')).join(' '))
    .attr('fill', style.fill || 'none')
    .attr('stroke', style.stroke || 'black');
}