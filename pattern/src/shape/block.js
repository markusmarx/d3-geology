/**
 * Schluff
 */
import { appendCircle, appendPolyline } from './shapes'

export default function block() {

  let modulo = 1;
  let color = 'black';

  const $ = (selection) => {

    selection = selection.append('g');

    appendPolyline(
      selection,
      [[5,10], [15, 5], [10,1], [5, 1], [5,1], [1,5], [5, 10]],
      {fill: null, stroke: color}
    );
    appendCircle(selection, 7, 5, 1, 'black', 'black');

  }

  $.ridgetBody = function (x, y) {
    return {
      x: x,
      y: y,
      width: 16,
      height: 11
    }
  }

  $.modulo = function (_) {
    if (arguments.length === 0) {
      return modulo;
    }
    modulo = _;
    return $;
  }

  return $;


}