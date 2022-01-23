import pattern from '../pattern/pattern'
import Logger from 'js-logger'
import { sand, sandFein, sandGrob, sandMittel } from './sand'
import renderTexture from './renderTexture'


Logger.useDefaults();

export default {
  title: 'DIN4023/Sand',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
};

export const Sand = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(sand())
  );
}

export const SandGrob = () => {
  return renderTexture(
    pattern()
      .size(100)
      .background('white')
      .texture(sandGrob())
  );
}

export const SandMittel = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(sandMittel())
  );
}

export const SandFein = () => {
  return renderTexture(
    pattern()
      .size(100)
      .texture(sandFein())
  );
}
