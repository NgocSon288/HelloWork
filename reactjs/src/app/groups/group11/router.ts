 
// import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import { IRouter } from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group11NavbarRouter: Array<IRouter> =
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
        // {
        //     path: '/admin/job-type-2',
        //     exact: true,
        //     name: 'job-type',
        //      permissions: ['Pages.JobType'], // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
  //        isAny: false,
        //     title: 'Quản lý loại công việc 2',
        //     component: LoadableComponent(() => import('./scenes/JobTypeList/JobTypeList')), //path của Layout
        //        showInNavbar: "right", //khong show neu no la 1 subdomain (none), show ben trai => left, ben phai => right
  // hideWithoutPermission: true
        // },
    ]
export default Group11NavbarRouter;

