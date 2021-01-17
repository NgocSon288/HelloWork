import LoadableComponent from 'app/shared/components/Loadable';
import { IRouter } from 'app/shared/components/Router/router.config';

const Group10NavbarRouter: IRouter[] = [
  {
    path: '/admin/group10/users',
    exact: true,
    name: 'QL Người dùng',
    permissions: ['Pages.JobType'],
    isAny: true,
    title: 'Danh sách người dùng',
    component: LoadableComponent(() => import('./scenes/Users')),
    showInNavbar: 'right',
    hideWithoutPermission: true,
  },
  {
    path: '/admin/group10/adminUsers',
    exact: true,
    name: 'QL Admins',
    permissions: ['Pages.JobType'],
    isAny: true,
    title: 'Danh sách admin',
    component: LoadableComponent(() => import('./scenes/AdminUsers')),
    showInNavbar: 'right',
    hideWithoutPermission: true,
  },
];
export default Group10NavbarRouter;
