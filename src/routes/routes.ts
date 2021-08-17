import { lazy } from 'react-router-guard';

export enum AppRoute {
  Home = '/'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => [
  {
    path: '/',
    routes: [
      {
        path: AppRoute.Home,
        component: lazy(() => import('../layout/Home')),
        meta: {
          title: 'Home'
        }
      }
    ]
  },
];