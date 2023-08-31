import { Lightning, Utils, Router } from '@lightningjs/sdk';

export default class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920, h: 1080, colorBottom: 0xff000000, scale: 1.2,
        src: Utils.asset("images/background.png"),
        transitions: {
          scale: { duration: 1, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' }
        }
      },
      Label: {
        x: 960,
        y: 530,
        text: {
          text: 'Trang chủ'
        }
      }
    }
  }

  _init() {
  }
}