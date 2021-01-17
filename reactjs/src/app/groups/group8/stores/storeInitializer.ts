import AccountStore from 'shared/stores/accountStore';
import AuthenticationStore from 'shared/stores/authenticationStore';
import RoleStore from 'shared/stores/roleStore';
import SessionStore from 'shared/stores/sessionStore';
import TenantStore from 'shared/stores/tenantStore';
import UserStore from 'shared/stores/userStore';
import CommentStore from './CommentStore';

export default function initializeStore() {
    return{
        authenticationStore: new AuthenticationStore(),
        roleStore: new RoleStore(),
        teantStore: new TenantStore(),
        userStore: new UserStore(),
        sessionStore: new SessionStore(),
        accountStore: new AccountStore(),

        CommentStore: new CommentStore(),
    }
}