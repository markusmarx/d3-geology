import texture from '../texture/texture'
import circle from '../shape/circle'

const defaultColor = '#ffc484';

const nameMapping = {
  'sand' : (color) => sand(color),
  'sandGrob' : (color) => sandGrob(color),
  'sandMittel': (color) => sandMittel(color),
  'sandFein': (color) => sandFein(color)
};

export const findSandDef = function (name) {
  return nameMapping[name];
}

export const sand = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).fill('black').radius(5).modulo(8))
    .shape(circle().cx(0).cy(0).fill('black').radius(3).modulo(6))
    .shape(circle().cx(0).cy(0).fill('black').radius(1).modulo(2));
}

export const sandGrob = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).fill('black').radius(5).modulo(6));
}

export const sandMittel = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).fill('black').radius(3).modulo(6));
}

export const sandFein = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(circle().cx(0).cy(0).fill('black').radius(1).modulo(4));
}