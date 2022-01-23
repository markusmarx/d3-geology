import renderToSvg from './rendersvg'
import random from '../utils/random'

export default function pattern() {

  let id = random();
  let size = 20;
  let background = undefined;
  let texture = undefined;

  const $ = selection => {
    const group = renderToSvg(selection, {size: size, id: id});
    group
      .append('rect')
      .attr('width', size)
      .attr('height', size);

    if (background !== undefined) {
      group
        .attr('fill', background);
    }

    if (texture !== undefined) {
      texture(group, size, size);
      if (texture.background() !== undefined) {
        group
          .attr('fill', texture.background());
      }
    }
  }

  $.id = function (_) {
    if (arguments.length === 0) {
      return id;
    }

    id = _;
    return $;
  };

  $.size = function (_) {
    if (arguments.length === 0) {
      return size;
    }

    size = _;
    return $;
  }

  $.background = function (_) {
    if (arguments.length === 0) {
      return background;
    }

    background = _;
    return $;
  }

  $.texture = function (_) {
    if (arguments.length === 0) {
      return texture;
    }

    texture = _;
    return $;
  }

  $.url = function () {
    return `url(#${id})`;
  };

  $.render = function (svg) {
    svg.call(this);
    return $;
  }

  return $;
}