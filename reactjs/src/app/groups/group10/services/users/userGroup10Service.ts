import { EntityDto } from 'shared/services/dto/entityDto';
import { GetAllUserOutput } from './dto/getAllUserOutput';
import http from 'shared/services/httpService';
import { AllResultDTO } from '../dto/allResultDTO';
import { ApproveUserInput } from './dto/approveUserInput';
import { CreateAdminInput } from './dto/createAdminInput';

class UserGroup10Service {
  public async getAll(): Promise<AllResultDTO<GetAllUserOutput>> {
    const result = await http.get('api/UserGroup10/GetUser');
    return result.data;
  }

  public async delete(entityDto: EntityDto) {
    const result = await http.delete('api/UserGroup10/DeleteUser', { params: entityDto });
    return result.data;
  }

  public async approve(approveUserInput: ApproveUserInput) {
    const result = await http.put('api/UserGroup10/Approve', null, {
      params: {
        id: approveUserInput.id,
        confirmStatus: approveUserInput.confirmStatus,
      },
    });
    return result.data.result;
  }

  public async getAllAdmins() {
    const result = await http.get('api/UserGroup10/GetAdmin');
    return result.data;
  }

  public async createAdmin(createAdminInput: CreateAdminInput) {
    let result = await http.post('api/UserGroup10/CreateAdmin', createAdminInput);
    return result;
  }

  public async updateRole(userId: number, roles: string[]) {
    let result = await http.post('api/UserGroup10/UpdateRole', roles, { params: { userId } });
    return result;
  }
}

export default new UserGroup10Service();
