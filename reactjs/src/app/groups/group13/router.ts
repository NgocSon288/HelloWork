 
// import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import LoadableComponent from 'app/shared/components/Loadable';
import { IRouter } from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group13NavbarRouter: Array<IRouter> =
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
        // }
        {
            path: '/',
            exact: true,
            name: 'home-page',
            permissions: [],
            isAny: false,
            title: 'Home Page',
            component: LoadableComponent(() => import('./scenes/JobTypeList/home/home.component')),
            showInNavbar: "center",
            hideWithoutPermission: false
        },
        {
            path: '/cv-management',
            exact: true,
            name: 'home-page',
            permissions: [],
            isAny: false,
            title: 'Home Page',
            component: LoadableComponent(() => import('./scenes/JobTypeList/cv-management/cv-management.component')),
            showInNavbar: "center",
            hideWithoutPermission: false
        }
    ]
export default Group13NavbarRouter;

