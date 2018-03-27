import { Container } from 'unstated';

import { generateKeyboard, keyboardTypes } from '../tools/piano';

const keyboardState = type => {
  const keyboard = generateKeyboard(type);
  return {
    type,
    keys: keyboard.keys,
    blacks: keyboard.blackKeys,
    whites: keyboard.whiteKeys,
    preLines: keyboard.whiteKeys.filter(key => key === 'F').length,
    postLines: keyboard.whiteKeys.filter(key => key === 'C').length
  };
};

const type = keyboardTypes.$61;

export default class KeyboardContainer extends Container {
  state = keyboardState(keyboardTypes.$61);

  set keyboardType(type) {
    this.setState(...keyboardState(type));
  }
}

export const keyboardContainer = new KeyboardContainer();