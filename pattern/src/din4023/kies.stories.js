import pattern from '../pattern/pattern'
import Logger from 'js-logger'
import { kiesFein, kiesGrob, kiesMittel } from './kies'
import { findDin4023Def } from './index'
import renderTexture from './renderTexture'


Logger.useDefaults();

export default {
  title: 'DIN4023/Kies',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
};


export const Kies = () => {
  return renderTexture(pattern()
    .size(100).texture(findDin4023Def('kies', 'grey')))
}

export const KiesGrob = () => {

  return renderTexture(
    pattern()
      .size(100)
      .background('white')
      .texture(kiesGrob())
  );
}

export const KiesMittel = () => {
  return renderTexture(
    pattern()
      .size(100)
      .background('white')
      .texture(kiesMittel())
  );
}

export const KiesFein = () => {

  return renderTexture(
    pattern()
      .size(100)
      .background('white')
      .texture(kiesFein())
  );
}