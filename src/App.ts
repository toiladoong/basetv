import { Router, Utils } from '@lightningjs/sdk';
import Menu from './widgets/Menu';
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
        z: -100,
        rect: true,
        color: '#000'
      },
      // Widgets: {
      //   Menu: {
      //     type: Menu,
      //     zIndex: 99,
      //     visible: true
      //   }
      // }
    }
  }

  _handleAppClose() {

  }

  _setup() {
    Router.startRouter({ root, routes }, this);
  }
}