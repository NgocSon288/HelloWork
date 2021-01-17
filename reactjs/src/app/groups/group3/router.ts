import LoadableComponent from 'app/shared/components/Loadable'
import {IRouter} from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group3NavbarRouter: Array<IRouter> =
    [
        // {
        //     path: '/job-type-2',
        //     exact: true,
        //     name: 'job-type',
        //       permissions: [],
   //       isAny: true,
        //     title: 'Loại công việc 2',
        //     component: LoadableComponent(() => import('./scenes/JobTypeList/JobTypeList')),
         //    showInNavbar: "left",
//       hideWithoutPermission: false
        // },
    {
        path: '/login-v2',
        exact: true,
        name: 'login-v2',
        permissions: [], // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
        isAny: false,
        title: 'Quản lý loại công việc 2',
        component: LoadableComponent(() => import('./scenes/Login')), //path của Layout
        showInNavbar: "none",
        hideWithoutPermission: true
    },
    ];
export default Group3NavbarRouter;

