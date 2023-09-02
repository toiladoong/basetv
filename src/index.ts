import { Launch } from '@lightningjs/sdk';
import inspect from './plugins/inspect';
import { sequence } from './helpers';
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
    stage: {},
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
    width: 1000,
    height: 562.5,
    log: true,
    showVersion: true,
    showFps: true,
    inspector: true
  });
  
  const canvas = app.stage.getCanvas();
  document.body.appendChild(canvas);
}

const startApp = () => {
  sequence([
      loadInspect,
      loadApp
    ]
  )
}

startApp();