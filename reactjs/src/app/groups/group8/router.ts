 
import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import { IRouter } from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group8NavbarRouter: Array<IRouter> =
    [
        {
            path: '/comment/comment-Jobseeker/:id/:isRecruiterWrite',
            exact: true,
            name: 'Đánh giá nhà tuyển dụng',
            permissions: [], // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
            isAny: true,
            title: 'Quản lý đánh giá',
            component: LoadableComponent(() => import('./scenes/CommentList/CommentListJobSeeker')), //path của Layout
            showInNavbar: "left", //khong show neu no la 1 subdomain (none), show ben trai => left, ben phai => right
            hideWithoutPermission: false
        },
        {
            isAny: true,
            path: '/comment/comment-Recruiter/:id/:isRecruiterWrite',
            exact: true,
            name: 'đánh giá người tìm việc',
            permissions: [], // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
            title: 'Quản lý loại công việc 2',
            component: LoadableComponent(() => import('./scenes/CommentList/CommentListRecruiter')), //path của Layout
            showInNavbar: "right", //khong show neu no la 1 subdomain (none), show ben trai => left, ben phai => right
            hideWithoutPermission: true
        },
        
    ]
export default Group8NavbarRouter;