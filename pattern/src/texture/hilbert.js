import d3Hilbert from 'd3-hilbert'
import Logger from 'js-logger'
import isCollide from '../utils/collide'

export default function hilbert() {

  let order = 4;
  let ridgetBodies = [];

  const $ = (selection, width, height, shapes) => {
    Logger.debug('Hilbert rendering ', selection);

    const coords = [];
    const hRange = { start: 0, length: 1000 };
    const h = d3Hilbert()
      .canvasWidth(width)
      .order(order)
      .layout(hRange);
    Logger.debug('hilbert-range:', hRange);
    const cellWidthHalf = hRange.cellWidth / 2;
    // calculate x,y from hilbert
    for (let i = 0; i < hRange.pathVertices.length; i++) {
      coords.push(h.getXyAtVal(i).map(k => (k * hRange.cellWidth) + cellWidthHalf));
    }
    Logger.debug(hRange);

    // render shapes
    for (let i = 0; i < shapes.length; i++) {
      let shape = shapes[i];
      coords.forEach((coord, i) => {
        if (i % shape.modulo() != 0) {
          return;
        }
        let ridgetBody = shape.ridgetBody(coord[0], coord[1]);

        for (let j = 0; j < ridgetBodies.length; j++) {
          if (isCollide(ridgetBody, ridgetBodies[j])) {
            return;
          }
        }

        if (ridgetBody.x + ridgetBody.width > width || ridgetBody.y + ridgetBody.height > height) {
          return;
        }

        ridgetBodies.push(ridgetBody);
        selection.append('g')
          .attr('transform', 'translate(' + coord[0] + ',' + coord[1] + ')')
          .call(shape);

      });

    }

  }

  return $;

}