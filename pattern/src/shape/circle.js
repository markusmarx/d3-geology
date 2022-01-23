import Logger from 'js-logger'

export default function circle() {

  let cx = undefined;
  let cy = undefined;
  let radius = undefined;
  let stroke = 'black';
  let fill = undefined;
  let ridgetMarginWidth = 4;
  let ridgetMarginHeight = 4;
  let modulo = 1;
  let innerCircleRadius = undefined;
  let id = undefined;

  const $ = (selection) => {
    Logger.debug('Render circle: ', selection);

    if (innerCircleRadius !== undefined) {
      selection = selection.append('g');
    }

    const circle = selection.append('circle')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('r', radius)

      if (stroke !== undefined) {
        circle.attr('stroke', stroke);
      }

      if (fill !== undefined) {
        circle.attr('fill', fill);
      }

      if (innerCircleRadius !== undefined) {
        selection.append('circle')
          .attr('cx', cx)
          .attr('cy', cy)
          .attr('r', innerCircleRadius)
          .attr('stroke', stroke)
          .attr('fill', fill);
      }

      return circle;
    }

    $.modulo = function (_) {
      if (arguments.length === 0) {
        return modulo;
      }
      modulo = _;
      return $;
    }

    $.ridgetBody = function (x, y) {
      return {
        x: cx + x - radius - ridgetMarginWidth,
        y: cy + y - radius - ridgetMarginHeight,
        width: radius + (ridgetMarginWidth * 2),
        height: radius + (ridgetMarginHeight * 2)
      }
    }

    $.cx = function (_) {
      if (arguments.length === 0) {
        return cx;
      }
      cx = _;
      return $;
    }

    $.id = function (_) {
      if (arguments.length === 0) {
        return cx;
      }
      id = _;
      return $;
    }

    $.cy = function (_) {
      if (arguments.length === 0) {
        return cy;
      }
      cy = _;
      return $;
    }

    $.innerCircleRadius = function (_) {
      if (arguments.length === 0) {
        return innerCircleRadius;
      }
      innerCircleRadius = _;
      return $;
    }

    $.radius = function (_) {
      if (arguments.length === 0) {
        return radius;
      }
      radius = _;
      return $;
    }

  $.fill = function (_) {
    if (arguments.length === 0) {
      return fill;
    }
    fill = _;
    return $;
  }

    return $;

}