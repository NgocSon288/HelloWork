import * as React from 'react';

import { Button, Card, Checkbox, Col, Row, Table } from 'antd';
import { inject, observer } from 'mobx-react';

import AppComponentBase from 'app/shared/components/AppComponentBase';
import { L } from 'shared/lib/abpUtility';
import Stores from 'app/shared/stores/storeIdentifier';
import '../../styles.less';
import UserGroup10Store from '../../stores/userGroup10Store';
import Search from 'antd/lib/input/Search';
import CreateAdmin from './components/createAdmin';
import { GetRoles } from 'shared/services/user/dto/getRolesOuput';
import { toJS } from 'mobx';

export interface IUserProps {
  userGroup10Store: UserGroup10Store;
}

export interface IUserState {
  modalVisible: boolean;
  currentAdmins: any[];
  currentAdminsChanges: any[];
}

@inject(Stores.UserGroup10Store)
@observer
class User extends AppComponentBase<IUserProps, IUserState> {
  formRef: any;

  state = {
    modalVisible: false,
    currentAdmins: [],
    currentAdminsChanges: [],
  };

  async componentDidMount() {
    await this.props.userGroup10Store.getAll();
    await this.props.userGroup10Store.getRoles();
    this.setState({ currentAdmins: toJS(this.props.userGroup10Store.admins) });
  }

  handleOpenCreateAdminModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;

    form.validateFields(async (err: any, values: any) => {
      let result;
      if (err) {
        return;
      } else {
        result = await this.props.userGroup10Store.createAdmin(values);
      }
      await this.props.userGroup10Store.getAll();
      if (result) {
        this.setState({ modalVisible: false, currentAdmins: toJS(this.props.userGroup10Store.admins) });
        form.resetFields();
      }
    });
  };

  saveFormRef = (formRef: any) => {
    this.formRef = formRef;
  };

  onAdminCheck = (adminId: number, role: GetRoles, checked: boolean) => {
    const currentAdminsChanges: any = [...this.state.currentAdminsChanges];
    const currentAdmins: any = [...this.state.currentAdmins];
    const currentAdmin: any = currentAdmins.find((value: { id: number }) => value.id === adminId);
    if (checked) {
      if (!currentAdmin.roles.includes(role.name)) {
        currentAdmin.roles.push(role.name);
      }
    } else {
      currentAdmin.roles = currentAdmin.roles.filter((value: string) => value != role.name);
    }

    let currentChange = currentAdminsChanges.find((value: any) => value.id === currentAdmin.id);
    if (!currentChange) {
      currentAdminsChanges.push(currentAdmin);
    } else {
      currentChange = { ...currentAdmin };
    }
    this.setState({ currentAdmins: currentAdmins, currentAdminsChanges: currentAdminsChanges });
  };

  onCancel = () => {
    this.setState({ currentAdmins: toJS(this.props.userGroup10Store.admins), currentAdminsChanges: [] });
  };

  onSave = async () => {
    await this.props.userGroup10Store.updateAdminsRoles(this.state.currentAdminsChanges);
    await this.props.userGroup10Store.getAll();
    this.setState({ currentAdmins: toJS(this.props.userGroup10Store.admins), currentAdminsChanges: [] });
  };

  public render() {
    const { admins, roles } = this.props.userGroup10Store;
    const dataSource: any = (this.state.currentAdmins as any[])?.map((admin) => {
      let result: any = {};
      result['id'] = admin.id;
      result['userName'] = admin.userName;
      roles.forEach((role) => (result[role.name] = admin.roles.includes(role.name)));
      return result;
    });
    const isEdited = this.state.currentAdminsChanges && this.state.currentAdminsChanges.length > 0;
    const columns = [
      {
        title: L('No.'),
        key: 'number',
        width: '5%',
        align: 'center' as 'left' | 'right' | 'center',
        render: (value: any, item: any) => <div>{dataSource.indexOf(item) + 1}</div>,
      },
      {
        title: L('UserName'),
        dataIndex: 'userName',
        key: 'userName',
        width: 150,
        align: 'center' as 'left' | 'right' | 'center',
        render: (text: string) => <div>{text}</div>,
      },
      ...roles.map((role) => ({
        title: role.name,
        dataIndex: role.name,
        key: role.name,
        width: 150,
        align: 'center' as 'left' | 'right' | 'center',
        render: (value: any, item: any) => {
          return (
            <Checkbox
              onChange={(e: any) => {
                this.onAdminCheck(item.id, role, e.target.checked);
              }}
              id={role.name}
              checked={value}
              style={{ lineHeight: '32px' }}
            />
          );
        },
      })),
    ];

    return (
      <Card>
        <Row>
          <Col
            xs={{ span: 2, offset: 0 }}
            sm={{ span: 2, offset: 0 }}
            md={{ span: 2, offset: 0 }}
            lg={{ span: 1, offset: 0 }}
            xl={{ span: 1, offset: 0 }}
            xxl={{ span: 1, offset: 0 }}
          >
            {' '}
            <h2>{L('Users')}</h2>
          </Col>
          <Button style={{ marginLeft: 8 }} onClick={this.handleOpenCreateAdminModal} type="primary">
            {L('Create')}
          </Button>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 0 }}>
            <Search placeholder={this.L('Filter')} />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
          >
            <Table
              className="user-table"
              rowKey={(record) => record.userName.toString()}
              size={'default'}
              bordered={true}
              columns={columns}
              // pagination={{ showSizeChanger: true, pageSize: 10, total: users === undefined ? 0 : (users ?? []).length, defaultCurrent: 1 }}
              loading={admins === undefined ? true : false}
              dataSource={dataSource === undefined ? [] : dataSource}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 4, offset: 20 }}>
            <Row type="flex" justify="end">
              <Button disabled={!isEdited} style={{ marginLeft: 8 }} onClick={this.onCancel}>
                {L('Cancel')}
              </Button>
              <Button disabled={!isEdited} style={{ marginLeft: 8 }} type="primary" onClick={this.onSave}>
                {L('Save')}
              </Button>
            </Row>
          </Col>
        </Row>
        <CreateAdmin
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modalVisible}
          onCancel={() =>
            this.setState({
              modalVisible: false,
            })
          }
          onCreate={this.handleCreate}
          roles={roles}
        />
      </Card>
    );
  }
}

export default User;
