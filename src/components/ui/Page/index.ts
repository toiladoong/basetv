import { Lightning } from '@lightningjs/sdk';
import Container from '../Container';
import PageContent from '../PageContent';

export default class Page extends Lightning.Component {
  private data: any;

  static _template() {
    return {
      Container: {
        type: Container,
        // children: {
        //   PageContent: {
        //     type: PageContent,
        //     data: {}
        //   }
        // },
        x: 120,
        y: 20
      }
    }
  }


  _init() {
  }

  _onDataProvided() {
    const container = this.tag('Container');

    container.patch({
      children: {
        PageContent: {
          type: PageContent,
          data: this.data
        }
      }
    })
  }

  _getFocused() {
    console.log('_getFocused App');

    return this;
  }
}