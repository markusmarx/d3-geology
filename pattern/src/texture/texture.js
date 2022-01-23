import Logger from 'js-logger'
import hilbert from './hilbert'


export default function texture() {

  let margin = 10;
  let shapes = [];
  let background = 'white'
  let fillFunction = hilbert();

  const $ = (selection, width, height) => {
    Logger.debug('Texture rendering start: ', selection, width, height);
    fillFunction(selection, width, height, shapes);
  }

  $.shape = function (_) {
    if (arguments.length === 0) {
      return shapes;
    }
    shapes.push(_);
    return $;
  }

  $.margin = function (_) {
    if (arguments.length === 0) {
      return margin;
    }

    margin = _;
    return $;
  }

  $.fillFunction = function (_) {
    if (arguments.length === 0) {
      return background;
    }

    fillFunction = _;
    return $;
  }

  $.background = function (_) {
    if (arguments.length === 0) {
      return background;
    }

    background = _;
    return $;
  }

  return $;

}