export interface UserModel {
  id: number;
  userName: string;
  fullName: string;
  accountType: number;
  confirmStatus: number;
  publicStatus: number;
}

export interface UserAddtionalData {
  company: string;
  field: string;
  position: string;
  attachments: UserAttachment[];
}

export interface UserAttachment {
  name: string;
  url: string;
}
