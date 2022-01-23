import texture from '../texture/texture'
import circle from '../shape/circle'

const defaultColor = '#ffffd2';

const nameMapping = {
  'kies' : (color) => kies(color),
  'kiesGrob' : (color) =>  kiesGrob(color),
  'kiesMittel': (color) => kiesMittel(color),
  'kiesFein': (color) => kiesFein(color)
};

export const findKiesDef = function (name) {
  return nameMapping[name];
}

export const kies = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).radius(6).modulo(8).innerCircleRadius(1))
    .shape(circle().cx(0).cy(0).radius(6).modulo(6))
    .shape(circle().cx(0).cy(0).radius(4).modulo(2));
}

export const kiesGrob = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).radius(6).modulo(6).innerCircleRadius(1));
}

export const kiesMittel = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).radius(6).modulo(3));
}

export const kiesFein = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).radius(4).modulo(7));
}