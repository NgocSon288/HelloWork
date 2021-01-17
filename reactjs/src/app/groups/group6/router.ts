
import LoadableComponent from 'app/shared/components/Loadable'
import { IRouter } from 'app/shared/components/Router/router.config';
const Group6NavbarRouter: Array<IRouter> =
    [
        {
            path: '/tin-tuyen-dung/dang-tin',
            exact: true,
            name: 'Đăng tin tuyển dụng',
            permissions: [],
            isAny: true,
            title: 'Đăng tin tuyển dụng',
            component: LoadableComponent(() => import('./scenes/CreateRecruitments/CreateRecruitments')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },

        {
            path: '/tin-tuyen-dung/cap-nhat/*',
            exact: true,
            name: 'Chỉnh sửa tin tuyển dụng',
            permissions: [],
            isAny: true,
            title: 'Chỉnh sửa tin tuyển dụng',
            component: LoadableComponent(() => import('./scenes/UpdateRecruitments/UpdateRecruitments')),
            showInNavbar: "left",
            hideWithoutPermission: false
        },
        {
            path: '/tin-tuyen-dung/*',
            exact: true,
            name: 'Xem chi tiết tin tuyển dụng',
            permissions: [],
            isAny: true,
            title: 'Xem chi tiết tin tuyển dụng',
            component: LoadableComponent(() => import('./scenes/RecruitmentDetail/RecruitmentDetail')),
            showInNavbar: "left",
            hideWithoutPermission: false
        }
    ]
export default Group6NavbarRouter;

