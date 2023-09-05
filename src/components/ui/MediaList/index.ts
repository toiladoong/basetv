import { Lightning } from '@lightningjs/sdk';
import { FocusManager } from '@lightningjs/ui-components';
import { List } from '@lightningjs/ui';
import MediaItem from '../MediaItem';

export default class MediaList extends Lightning.Component {
  private data: any;

  static _template() {
    return {
      List: {
        type: List,
        direction: 'row'
      },
      // Row: {
      //   type: FocusManager,
      //   direction: 'row',
      //   items: []
      // },
      BorderActive: {}
    }
  }

  _init() {
    const items = this.data?.items;

    console.log('items', items);

    items.forEach((item: any, index: number) => {
      this.tag('List').add({
        MediaItem: {
          type: MediaItem,
          data: item,
          // x: index * (300 + 30)
        }
      })
    })
  }

  _getFocused() {
    console.log('_getFocused')

    return this.tag('Row');
  }
}