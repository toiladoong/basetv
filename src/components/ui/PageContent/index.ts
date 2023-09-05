import { Lightning, Utils } from '@lightningjs/sdk';
import MediaList from '../MediaList';

export default class PageContent extends Lightning.Component {
  private data: any;

  static _template() {
    return {
      // MediaList: {
      //   type: MediaList
      // }
    }
  }

  static _states() {
    return []
  }

  _init() {
    const groups = this.data?.groups || [];

    this.patch({
      children: groups.map((item: any) => {
        return {
          MediaList: {
            type: MediaList,
            data: item
          }
        }
      })
    });
  }

  _getFocused() {
    console.log('_getFocused App');

    return this
  }
}