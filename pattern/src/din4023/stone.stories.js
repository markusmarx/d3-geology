import pattern from '../pattern/pattern'
import Logger from 'js-logger'
import renderTexture from './renderTexture'
import { stein } from './stone'

Logger.useDefaults();

export default {
  title: 'DIN4023/Stein',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
};

export const Steine = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(stein())
  );
}