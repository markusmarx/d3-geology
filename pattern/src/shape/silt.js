/**
 * Schluff
 */
import { appendCircle, appendLine } from './shapes'

export default function silt() {

  let modulo = 1;
  let color = 'black';

  const $ = (selection) => {

    selection = selection.append('g');
    appendCircle(selection, 6, 4, 3, color, color);
    appendCircle(selection, 16, 4, 3, color, color);
    appendLine(selection, 0, 7, 22, 7, color);
  }

  $.ridgetBody = function (x, y) {
    return {
      x: x,
      y: y,
      width: 22,
      height: 6
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