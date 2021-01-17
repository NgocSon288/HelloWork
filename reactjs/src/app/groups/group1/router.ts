
import LoadableComponent from 'app/shared/components/Loadable'
import { IRouter } from 'app/shared/components/Router/router.config';

const Group1NavbarRouter: Array<IRouter> =
    [
        {
            path: '/trang-ca-nhan-cong-ty',
            exact: true,
            name: 'Hồ sơ công ty',
            permissions: [],
            isAny: true,
            title: 'Hồ sơ công ty',
            component: LoadableComponent(() => import('./scenes/CompanyInfo/CompanyInfoList')),
            showInNavbar: "left",
            hideWithoutPermission: false

        },
        {
            path: '/trang-thai-tu-choi-ung-vien',
            exact: true,
            name: 'Trang trạng thái từ chối ứng viên',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái từ chối ứng viên',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateRejected')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-da-luu-ung-vien',
            exact: true,
            name: 'Trang trạng thái đã lưu ứng viên',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái đã lưu ứng viên',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateSaved')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-thanh-cong-ung-vien',
            exact: true,
            name: 'Trang trạng thái thành công ứng viên',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái thành công ứng viên',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateSuccessful')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-cho-chot-lich',
            exact: true,
            name: 'Trang trạng thái chờ chốt lịch ứng viên',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái chờ chốt lịch ứng viên',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateWaitingLatch')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-da-chot-lich',
            exact: true,
            name: 'Trang trạng thái đã chốt lịch ứng viên',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái đã chốt lịch ứng viên',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateLatch')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-cho-ket-qua-ung-vien',
            exact: true,
            name: 'Trang trạng thái chờ kết quả ứng viên',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái chờ kết quả ứng viên',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateWaitingResult')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/trang-thai-cho-phan-hoi',
            exact: true,
            name: 'Trang trạng thái ứng viên chờ phản hồi',
            permissions: [],
            isAny: true,
            title: 'Trang trạng thái ứng viên chờ phản hồi',
            component: LoadableComponent(() => import('./scenes/StateApplicant/StateWaitingToResponse')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        
        // {
        //     path: '/trang-ca-nhan-cong-ty',
        //     exact: true,
        //     name: 'Hồ sơ công ty',
        //     permissions: ['Pages.JobType'], // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
        //     isAny: false,
        //     title: 'Hồ sơ công ty',
        //     component: LoadableComponent(() => import('./scenes/CompanyInfo/CompanyInfoList')), //path của Layout
        //     showInNavbar: "right", //khong show neu no la 1 subdomain (none), show ben trai => left, ben phai => right
        //     hideWithoutPermission: false//neu khong co permission thi khong show

        // }
    ]
export default Group1NavbarRouter;

