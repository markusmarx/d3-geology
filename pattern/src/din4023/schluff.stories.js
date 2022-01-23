import pattern from '../pattern/pattern'
import Logger from 'js-logger'
import { sand, sandFein, sandGrob, sandMittel } from './sand'
import renderTexture from './renderTexture'
import { schluff } from './schluff'


Logger.useDefaults();

export default {
  title: 'DIN4023/Schluff',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
};

export const Schluff = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(schluff())
  );
}