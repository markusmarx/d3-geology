import texture from '../texture/texture'
import stone from '../shape/stone'

const defaultColor = '#ffffd2';

const nameMapping = {
  'stein' : (color) => stein(color)
};

export const findSteinDef = function (name) {
  return nameMapping[name];
}

export const stein = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(stone().modulo(8))

}