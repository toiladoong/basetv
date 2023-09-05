import { Lightning } from '@lightningjs/sdk';
import { getImgUrl } from '../../../libraries/helpers';

export default class MediaItem extends Lightning.Component {
  static _template() {
    return {
      w: 300,
      h: 450,
      rect: true,
      Image: {
        w: (w: number) => w,
        h: (h: number) => h - 50,
      },
      Label: {
        x: 10,
        y: 405,
        color: 0xff000000,
        text: { fontSize: 32 }
      }
    }
  }

  set data(obj: any) {
    const { title, poster_path } = obj;

    this.patch({
      Image: { src: getImgUrl(poster_path) },
      Label: { text: title.toString() }
    })
  }

  _focus() {
    console.log('_focus')

    this.patch({
      smooth: { color: 0xff763ffc, scale: 1.1 },
      Label: {
        smooth: { color: 0xffffffff }
      }
    });
  }

  _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff, scale: 1.0 },
      Label: {
        smooth: { color: 0xff000000 }
      }
    });
  }
}