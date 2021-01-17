 
 import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import { IRouter } from 'app/shared/components/Router/router.config';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group4NavbarRouter: Array<IRouter> =
    [
        {
            path: '/list-cv',
            exact: true,
            name: 'list-cv',
            permissions: [],
            isAny: true,
            title: 'Danh sách các CV ',
            component: LoadableComponent(() => import('./scenes/ListCV/ListCV')),
            showInNavbar: "none",
            hideWithoutPermission: false
        },
        {
            path: '/list-cv/edit',
            exact: true,
            name: 'list-cv',
            permissions: [],
            isAny: true,
            title: 'Danh sách các CV ',
            component: LoadableComponent(() => import('./scenes/CreateCV/CreateCV')),
            showInNavbar: "none",
            hideWithoutPermission: false
        },
        
    ]
export default Group4NavbarRouter;

