import { action, observable } from 'mobx';

import userGroup10Service from '../services/users/userGroup10Service';
import { UserModel } from '../models/Users/UserModel';
import { EntityDto } from 'shared/services/dto/entityDto';
import { ApproveUserInput } from '../services/users/dto/approveUserInput';
import { CreateAdminInput } from '../services/users/dto/createAdminInput';
import { GetRoles } from 'shared/services/user/dto/getRolesOuput';
import userService from 'shared/services/user/userService';
import { notification } from 'antd';

const openNotificationWithIcon = (type: string, operation: string, message?: string) => {
  const content = {
    message: type === 'success' ? 'Success' : 'Error',
    description: `The operation ${operation} completed with ${type === 'success' ? 'success' : 'errors'} ${message ? ': ' + message : ''}`,
    duration: 4.5,
  };
  if ((type === 'success')) {
    notification.success(content);
  } else {
    notification.error(content);
  }
};

class UserGroup10Store {
  @observable users!: UserModel[];
  @observable admins!: any[];
  @observable roles: GetRoles[] = [];

  @action
  async getAll() {
    const result = await userGroup10Service.getAll();
    this.users = [...result.result];
    const adminResult = await userGroup10Service.getAllAdmins();
    this.admins = [...adminResult.result];
  }

  @action
  async delete(entityDto: EntityDto) {
    await userGroup10Service.delete(entityDto);
    this.users = this.users.filter((x: UserModel) => x.id !== entityDto.id);
  }

  @action
  async approve(input: ApproveUserInput) {
    await userGroup10Service.approve(input);
    const result = await userGroup10Service.getAll();
    this.users = [...result.result];
  }

  @action
  async createAdmin(createAdminInput: CreateAdminInput) {
    let result = await userGroup10Service.createAdmin(createAdminInput).catch((error) => {
      openNotificationWithIcon('error', 'Create Role', error.response.data.result);
    });

    if (result && result.status === 200) {
      openNotificationWithIcon('success', 'Create Role');
    }
    return result;
  }

  @action
  async updateAdminsRoles(admins: any[]) {
    let results = await Promise.all(
      admins.map(
        async (admin) =>
          await userGroup10Service.updateRole(admin.id, admin.roles).catch((error) => {
            openNotificationWithIcon('error', 'Update Role', error);
          })
      )
    );

    if (results && results.length > 0 && !results.some((result) => !result || result.status !== 200)) {
      openNotificationWithIcon('success', 'Update Role');
    } else {
      openNotificationWithIcon('error', 'Update Role', 'An unexpected error occured');
    }
    return results;
  }

  @action
  async getRoles() {
    let result = await userService.getRoles();
    this.roles = result;
  }
}

export default UserGroup10Store;
