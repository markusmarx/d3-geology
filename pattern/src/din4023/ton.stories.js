import pattern from '../pattern/pattern'
import Logger from 'js-logger'
import renderTexture from './renderTexture'
import { ton } from './ton'

Logger.useDefaults();

export default {
  title: 'DIN4023/Ton',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
};

export const Ton = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(ton())
  );
}