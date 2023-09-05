import Pages from '../pages';
import NotFound from '../pages/app/not-found';

const routes: any = [];

Pages.forEach((route: any) => {
  if (route.path instanceof Array) {
    route.path.forEach((path: any) => {
      routes.push({
        ...route,
        path,
        widgets: ['Menu']
      })
    })
  } else {
    routes.push({
      ...route,
      widgets: ['Menu']
    })
  }
});

routes.push({
  path: '*',
  component: NotFound
})

export const root = 'splash';

export {
  routes
}