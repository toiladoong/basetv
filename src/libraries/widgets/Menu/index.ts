import { Lightning, Router, Utils } from '@lightningjs/sdk';
import MenuItem from './MenuItem';

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 90,
      h: 1920,
      color: 0xff212121,
      x: 0,
      y: 0,
      alpha: 0.9,
      transitions: {
        x: {
          duration: 0.3,
          timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)',
        },
        w: {
          duration: 0.3,
          timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)',
        },
      },
      Items: {
        y: 150,
        mountY: 0.5,
        flex: { direction: 'column' }
      }
    };
  }

  _init() {
  }

  set items(v) {
    this.tag('Items').children = v.map(({ label, pageId, selected }: any) => {
      return {
        x: 20,
        type: MenuItem,
        label,
        pageId,
        selected
      }
    });
  }

  select(id, fastForward) {

  }
}