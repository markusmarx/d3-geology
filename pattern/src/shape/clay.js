/**
 * Schluff
 */
import { appendLine } from './shapes'

export default function clay() {

  let modulo = 1;
  let color = 'black';

  const $ = (selection) => {

    selection = selection.append('g');

    appendLine(selection,1, 1, 22, 1, color);
    appendLine(selection, 5, 10, 32, 10, color)
    appendLine(selection, 0, 20, 22, 20, color);

  }

  $.ridgetBody = function (x, y) {
    return {
      x: x,
      y: y,
      width: 33,
      height: 21
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