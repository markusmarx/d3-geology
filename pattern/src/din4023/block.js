import texture from '../texture/texture'
import block from '../shape/block'

const defaultColor = '#ffffd2';

const nameMapping = {
  'block' : (color) => block(color)
};

export const findBlockDef = function (name) {
  return nameMapping[name];
}

export const blocks = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(block().modulo(8))

}