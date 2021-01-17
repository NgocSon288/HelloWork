 
import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import { IRouter } from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group5NavbarRouter: Array<IRouter> =
    [
        {
            path: '/trang-ca-nhan-nguoi-tim-viec',
            exact: true,
            name: 'Trang cá nhân người tìm việc',
             permissions: [],
            isAny: true,
            title: 'Trang cá nhân người tìm việc',
            component: LoadableComponent(() => import('./scenes/JobSeekerList/JobSeekerList')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-viec-lam',
            exact: true,
            name: 'Trang trạng thái việc làm',
            permissions: [],
            isAny: true,
            title: 'Trạng thái việc làm',
            component: LoadableComponent(() => import('./scenes/StateApplication/SateApplication')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-da-luu',
            exact: true,
            name: 'Trang trạng thái đã lưu',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái đã lưu',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateSaved')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-cho-chot-lich',
            exact: true,
            name: 'Trang trạng thái chờ chốt lịch',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái chờ chốt lịch',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateWaitingLatch')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-cho-phan-hoi',
            exact: true,
            name: 'Trang trạng thái chờ phản hồi',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái chờ phản hồi',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateWaitingResponse')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-cho-ket-qua',
            exact: true,
            name: 'Trang trạng thái chờ kết quả',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái chờ kết quả',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateWaitingResult')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-thanh-cong',
            exact: true,
            name: 'Trang trạng thái thành công',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái thành công',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateSuccessful')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-tu-choi',
            exact: true,
            name: 'Trang trạng thái từ chối',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái từ chối',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateRejected')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-da-chot-lich',
            exact: true,
            name: 'Trang trạng thái đã chốt lịch',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái đã chốt lịch',
            component: LoadableComponent(() => import('./scenes/StateApplication/StateLatch')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
//         {
//             path: '/admin/job-type-2',
//             exact: true,
//             name: 'job-type',
//              permissions: ['Pages.JobType'], // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
//          isAny: false,
//             title: 'Quản lý loại công việc 2',
//             component: LoadableComponent(() => import('./scenes/JobTypeList/JobTypeList')), //path của Layout
//                showInNavbar: "right", //khong show neu no la 1 subdomain (none), show ben trai => left, ben phai => right
//   hideWithoutPermission: true
//         },
    ]
export default Group5NavbarRouter;

