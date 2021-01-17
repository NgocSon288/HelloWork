import * as React from 'react';

import { Button, Card, Col, Dropdown, Input, Menu, Modal, Row, Table, Tag } from 'antd';
import { inject, observer } from 'mobx-react';

import AppComponentBase from 'app/shared/components/AppComponentBase';
import ApproveUser from './components/approveUser';
import { L } from 'shared/lib/abpUtility';
import Stores from 'app/shared/stores/storeIdentifier';
import '../../styles.less';
import { TableRowSelection } from 'antd/lib/table';
import { UserModel } from '../../models/Users/UserModel';
import UserGroup10Store from '../../stores/userGroup10Store';
import { ApproveStatus } from '../../constants/ApproveStatus';
import { AccountType } from '../../constants/AccountType';

export interface IUserProps {
  userGroup10Store: UserGroup10Store;
}

export interface IUserState {
  modalVisible: boolean;
  userId: number;
  selectedUsers: string[];
  approveUser: number;
  approveModalVisible: boolean;
}

const confirm = Modal.confirm;
const Search = Input.Search;

@inject(Stores.UserGroup10Store)
@observer
class User extends AppComponentBase<IUserProps, IUserState> {
  formRef: any;

  state = {
    modalVisible: false,
    userId: 0,
    selectedUsers: [],
    approveUser: 0,
    approveModalVisible: false,
  };

  async componentDidMount() {
    await this.props.userGroup10Store.getAll();
  }

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  delete(userId: string) {
    const self = this;
    confirm({
      title: 'Do you want to delete this user?',
      okType: 'danger',
      onOk() {
        self.props.userGroup10Store.delete({ id: Number(userId) });
      },
    });
  }

  deleteAll(selectedUsers: string[]) {
    const self = this;
    confirm({
      title: 'Do you want to delete all these users?',
      content: 'This action is not reversable',
      okType: 'danger',
      onOk() {
        selectedUsers.forEach((userId) => self.props.userGroup10Store.delete({ id: Number(userId) }));
        self.setState({ selectedUsers: [] });
      },
    });
  }

  handleOpenApproveModal = () => {
    this.setState({
      approveModalVisible: !this.state.approveModalVisible,
    });
  };

  approve(userId: string) {
    this.setState({ approveUser: Number(userId) });
    this.handleOpenApproveModal();
  }

  handleApprove = () => {
    const approveUserId = this.state.approveUser;

    this.props.userGroup10Store.approve({ id: approveUserId, confirmStatus: ApproveStatus.APPROVED });

    this.setState({ approveModalVisible: false });
    this.setState({ selectedUsers: [] });
  };

  approveAll(selectedUsers: string[]) {
    const self = this;
    confirm({
      title: 'Do you want to approve all these users?',
      content: 'This action will not take effect on already approved users',
      onOk() {
        selectedUsers.forEach((userId) => self.props.userGroup10Store.approve({ id: Number(userId), confirmStatus: ApproveStatus.APPROVED }));
        self.setState({ selectedUsers: [] });
      },
    });
  }

  handleReject = () => {
    const approveUserId = this.state.approveUser;

    this.props.userGroup10Store.approve({ id: approveUserId, confirmStatus: ApproveStatus.REJECTED });

    this.setState({ approveModalVisible: false });
    this.setState({ selectedUsers: [] });
  };

  handleRevaluate = () => {
    const approveUserId = this.state.approveUser;

    this.props.userGroup10Store.approve({ id: approveUserId, confirmStatus: ApproveStatus.REVALUATING });

    this.setState({ approveModalVisible: false });
    this.setState({ selectedUsers: [] });
  };

  onSelectChange = (selectedUsers: number[] | string[]) => {
    this.setState({ selectedUsers: selectedUsers as string[] });
  };

  onDeleteClick = () => {
    if (this.state.selectedUsers.length > 1) {
      this.deleteAll(this.state.selectedUsers);
    } else {
      this.delete(this.state.selectedUsers[0]);
    }
  };

  onApproveClick = () => {
    if (this.state.selectedUsers.length > 1) {
      this.approveAll(this.state.selectedUsers);
    } else {
      this.approve(this.state.selectedUsers[0]);
    }
  };

  public render() {
    const { users } = this.props.userGroup10Store;
    const selectedUsers = this.state.selectedUsers;
    const rowSelection: TableRowSelection<UserModel> = {
      selectedRowKeys: selectedUsers,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedUsers.length > 0;
    const isApproveDisable = !(
      hasSelected &&
      selectedUsers.some((userId) => {
        const checkUser = users.find((user) => user.id.toString() === userId);

        if (checkUser && checkUser.confirmStatus !== ApproveStatus.APPROVED) {
          return true;
        }
        return false;
      })
    );

    const approveUser = users ? users.find((user) => user.id === this.state.approveUser) : null;

    const columns = [
      { title: L('No.'), key: 'number', width: '5%', render: (value: any, item: any, index: number) => <div>{index}</div> },
      { title: L('UserName'), dataIndex: 'userName', key: 'userName', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('FullName'), dataIndex: 'fullName', key: 'fullName', width: 150, render: (text: string) => <div>{text}</div> },
      {
        title: L('AccountType'),
        dataIndex: 'accountType',
        key: 'accountType',
        width: 150,
        render: (accountType: number) => {
          switch (accountType) {
            case AccountType.EMPLOYER:
              return <Tag color="green">{L('EMPLOYER')}</Tag>;
            case AccountType.CANDIDATE:
              return <Tag color="geekblue">{L('CANDIDATE')}</Tag>;
            default:
              return null;
          }
        },
      },
      {
        title: L('PublicStatus'),
        dataIndex: 'publicStatus',
        key: 'publicStatus',
        width: 150,
        render: (publicStatus: number) => (publicStatus !== 0 ? <Tag color="#2db7f5">{L('Yes')}</Tag> : <Tag color="red">{L('No')}</Tag>),
      },
      {
        title: L('ConfirmStatus'),
        dataIndex: 'confirmStatus',
        key: 'confirmStatus',
        width: 150,
        render: (confirmStatus: number, record: UserModel) => {
          switch (confirmStatus) {
            case ApproveStatus.APPROVED:
              return <Tag color="green">{L('Approved')}</Tag>;
            case ApproveStatus.REJECTED:
              return (
                <Tag color="volcano" onClick={() => this.approve(record.id.toString())}>
                  {L('Rejected')}
                </Tag>
              );
            case ApproveStatus.REVALUATING:
              return (
                <Tag color="geekblue" onClick={() => this.approve(record.id.toString())}>
                  {L('Revaluating')}
                </Tag>
              );
            default:
              return (
                <Tag color="yellow" onClick={() => this.approve(record.id.toString())}>
                  {L('Pending')}
                </Tag>
              );
          }
        },
      },
      {
        title: L('Actions'),
        width: 150,
        render: (_text: string) => (
          <div>
            <Dropdown trigger={['click']} overlay={<Menu></Menu>} placement="bottomLeft">
              <Button type="primary" icon="setting">
                {L('Actions')}
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ];

    return (
      <Card>
        <Row>
          <Col
            xs={{ span: 4, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            xxl={{ span: 2, offset: 0 }}
          >
            {' '}
            <h2>{L('Users')}</h2>
          </Col>
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
              rowKey={(record) => record.id.toString()}
              rowSelection={rowSelection}
              size={'default'}
              bordered={true}
              columns={columns}
              pagination={{ showSizeChanger: true, pageSize: 10, total: users === undefined ? 0 : (users ?? []).length, defaultCurrent: 1 }}
              loading={users === undefined ? true : false}
              dataSource={users === undefined ? [] : users}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 4, offset: 20 }}>
            <Row type="flex" justify="end">
              <span>{hasSelected ? `Selected ${selectedUsers.length} items` : ''}</span>
              <Button style={{ marginLeft: 8 }} type="danger" disabled={!hasSelected} onClick={this.onDeleteClick}>
                {L('Delete')}
              </Button>
              <Button style={{ marginLeft: 8 }} disabled={!hasSelected || isApproveDisable} type="primary" onClick={this.onApproveClick}>
                {L('Approve')}
              </Button>
            </Row>
          </Col>
        </Row>
        {users && users.length > 0 && approveUser ? (
          <ApproveUser
            visible={this.state.approveModalVisible}
            onCancel={() =>
              this.setState({
                approveModalVisible: false,
              })
            }
            user={approveUser}
            onApprove={this.handleApprove}
            onReject={this.handleReject}
            onRevaluate={this.handleRevaluate}
          />
        ) : null}
      </Card>
    );
  }
}

export default User;
