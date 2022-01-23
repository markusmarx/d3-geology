import pattern from '../pattern/pattern'
import Logger from 'js-logger'
import renderTexture from './renderTexture'
import { blocks } from './block'

Logger.useDefaults();

export default {
  title: 'DIN4023/Block',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
};

export const Bloecke = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(blocks())
  );
}