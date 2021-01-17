
// import LoadableComponent from 'app/shared/components/Loadable' //khi nao chinh lai thi bo comment
import { IRouter } from 'app/shared/components/Router/router.config';
import FilterCandidate from './scenes/FilterCandidate/FilterCandidate';
import FilterJob from './scenes/FilterJob/FilterJob';

//tham khao cua nhom 1 và tien hanh voi router khac nha
const Group12NavbarRouter: Array<IRouter> =
    [
        {
            path: '/timkiemungvien',
            exact: true,
            name: 'Tìm kiếm ứng viên',
            permissions: [],
            isAny: true,
            title: 'Tìm kiếm ứng viên',
            component: FilterCandidate,
            showInNavbar: 'left',
            hideWithoutPermission: false
        },
        {
            path: '/timkiemvieclam',
            exact: true,
            name: 'Tìm kiếm việc làm',
            permissions: [],
            isAny: true,
            title: 'Tìm kiếm việc làm',
            component: FilterJob ,
            showInNavbar: 'left',
            hideWithoutPermission: false
        },
    ]
export default Group12NavbarRouter;

