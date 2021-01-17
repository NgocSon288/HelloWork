import LoadableComponent from 'app/shared/components/Loadable';
import { IRouter } from 'app/shared/components/Router/router.config';

const Group7NavbarRouter: Array<IRouter> =
    [
        {
            path: '/services',
            exact: true,
            name: 'Quản lý dịch vụ',
            //            permissions: ['Pages.RegisterService'],
            permissions: [],
            isAny: false,
            title: 'Quản lý dịch vụ',
            component: LoadableComponent(() => import('./scenes/serviceList.scene/serviceList')),
            showInNavbar: "left",
            hideWithoutPermission: true
        },
        {
            path: '/admin/service-approve',
            exact: true,
            name: 'Quản lý dịch vụ',
            //permissions: ['Pages.RegisterService'],
            permissions: [],
            isAny: false,
            title: 'Quản lý dịch vụ',
            component: LoadableComponent(() => import('./scenes/serviceApprove/serviceApprove')),
            showInNavbar: "right",
            hideWithoutPermission: true
        }
    ]
export default Group7NavbarRouter;

