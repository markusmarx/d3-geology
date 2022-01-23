import texture from '../texture/texture'
import silt from '../shape/silt'
import { sand, sandFein, sandGrob, sandMittel } from './sand'

const defaultColor = '#b3e090';

const nameMapping = {
  'schluff' : (color) => schluff(color)
};

export const findSchluffDef = function (name) {
  return nameMapping[name];
}

export const schluff = (color) => {
  return texture()
    .background(color || defaultColor)
    .shape(silt().modulo(8))

}