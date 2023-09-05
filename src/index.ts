import { Launch } from '@lightningjs/sdk';
import inspect from './libraries/plugins/inspect';
import { sequence } from './libraries/helpers';
import App from './App';

const loadInspect = async () => {
  // @ts-ignore
  if (import.meta.env.VITE_INSPECTOR === 'true') {
    // @ts-ignore
    return inspect(window.lng)
  }

  return Promise.resolve()
}

const loadApp = () => {
  const app = Launch(App, {
    stage: {
      w: 1920,
      h: 1080,
      // precision: 2 / 3,
    },
    debug: true,
    enablePointer: true,
    keys: {
      38: 'Up',
      40: 'Down',
      37: 'Left',
      39: 'Right',
      13: 'Enter',
      8: 'Back',
      27: 'Exit',
    },
    // @ts-ignore
    name: 'BaseTV',
    version: '0.0.1',
    icon: ''
  }, {
    log: true,
    showVersion: true,
    showFps: true,
    inspector: true,
    lazyCreate: true,
    lazyDestroy: true,
    reuseInstance: true,
    logRoute: false
  });

  const canvas = app.stage.getCanvas();

  const container = document.getElementById('app');

  if (container) {
    // container.replaceChild(canvas, container.childNodes[0]);
    container.innerHTML = '';
    container.appendChild(canvas);
  } else {
    document.body.appendChild(canvas);
  }
}

const startApp = () => {
  sequence([
    loadInspect,
    loadApp
  ])
}

startApp();