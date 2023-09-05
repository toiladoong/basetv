import { Router, Utils } from '@lightningjs/sdk';
import { FocusManager } from '@lightningjs/ui-components';
import Menu from './libraries/widgets/Menu';
import { root, routes } from './router';

export default class App extends Router.App {
  static getFonts() {
    return [
      { family: 'Light', url: Utils.asset('fonts/Inter-Light.ttf'), descriptors: {} },
      { family: 'Regular', url: Utils.asset('fonts/Inter-Regular.ttf'), descriptors: {} },
      { family: 'Black', url: Utils.asset('fonts/Inter-Black.ttf'), descriptors: {} },
      { family: 'SemiBold', url: Utils.asset('fonts/Inter-SemiBold.ttf'), descriptors: {} },
      { family: 'Bold', url: Utils.asset('fonts/Inter-Bold.ttf'), descriptors: {} }
    ];
  }

  static _template() {
    return {
      x: 0,
      Background: {
        w: 1920,
        h: 1080,
        colorBottom: 0xff000000,
        scale: 1.2,
        src: Utils.asset("images/background.png"),
        transitions: {
          scale: { duration: 1, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' }
        },
        zIndex: 1
      },
      Widgets: {
        Menu: {
          type: Menu,
          zIndex: 99,
          items: [
            { label: 'Home', pageId: 'home', selected: true },
            { label: 'Kênh', pageId: 'channel', selected: false },
            { label: 'Phim', pageId: 'movie', selected: false }
          ]
        }
      }
    }
  }

  _handleAppClose() {

  }

  _setup() {
    // console.log('routes', routes);

    Router.startRouter({ root, routes }, this);
  }

  _getFocused() {
    return this;
  }
}