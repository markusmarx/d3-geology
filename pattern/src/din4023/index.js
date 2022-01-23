import { findKiesDef } from './kies'
import { findSandDef } from './sand'
import { assertString } from '@babel/core/lib/config/validation/option-assertions'
import { findSchluffDef } from './schluff'
import { findTonDef } from './ton'
import { findSteinDef } from './stone'
import { findBlockDef } from './block'

export * from './kies'
export * from './sand'

export const findDin4023Def =  (name, color) => {
  assertString(name);

  let def = findKiesDef(name) || findSandDef(name) || findSchluffDef(name) || findTonDef(name) || findSteinDef(name)
            findBlockDef(name);
  if (def === undefined) {
    throw new Error('no d3-geology definition found for name ' + name);
  }

  return def(color);
}

