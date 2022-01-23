import texture from '../texture/texture'
import clay from '../shape/clay'

const defaultColor = '#ffc1ff';

const nameMapping = {
  'ton' : (color) => ton(color)
};

export const findTonDef = function (name) {
  return nameMapping[name];
}

export const ton = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(clay().modulo(8))

}