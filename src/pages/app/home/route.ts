import { getMovies } from '../../../libraries/apis';
import Home from './index';

export default {
  name: 'home',
  path: 'home',
  component: Home,
  before: async (page: any) => {
    const movies = await getMovies();

    page.data = {
      groups: [
        {
          sectionType: 'list',
          items: movies.results
        }
      ]
    }
  }
}