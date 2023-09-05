import { Lightning } from '@lightningjs/sdk';

export default class MenuItem extends Lightning.Component {
  static _template() {
    return {
      h: 56,
      alpha: 0.5,
      Label: {
        mountY: 0.5,
        y: 50,
        text: {
          fontFace: 'Regular',
          fontSize: 20
        }
      },
    };
  }

  set label(v) {
    this.tag('Label').text = v;
  }

  set pageId(v) {
    this._pageId = v;
  }

  get pageId() {
    return this._pageId;
  }

  _focus() {
    this.alpha = 1;
  }

  _unfocus() {
    this.alpha = 0.5;
  }
}