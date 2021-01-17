 
import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import { IRouter } from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group9NavbarRouter: Array<IRouter> =
    [
        {
            path: '/recruimentPosts',
            exact: true,
            name: 'Tin tuyển dụng',
            permissions: [],
            isAny: true,
            title: 'Tin tuyển dụng',
            component: LoadableComponent(() => import('./scenes/RecruimentPostList/RecruimentPostList')),
            showInNavbar: "left",
            hideWithoutPermission: false
        
        },
        {
            path: '/admin/recruimentPosts',
            exact: true,
            name: 'QL Tin tuyển dụng',
            permissions: [],
            isAny: true,
            title: 'Quản lý tin tuyển dụng',
            component: LoadableComponent(() => import('./scenes/AdminRecruimentPostList/AdminRecruimentPostList')),
            showInNavbar: "right",
            hideWithoutPermission: false
        
        },
           
    ]

    
export default Group9NavbarRouter;