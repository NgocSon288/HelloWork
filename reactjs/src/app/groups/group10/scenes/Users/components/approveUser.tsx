import { Button, Card, Empty, Form, Input, Modal } from 'antd';
import { AccountType } from 'app/groups/group10/constants/AccountType';
import { UserModel } from 'app/groups/group10/models/Users/UserModel';
import * as React from 'react';
import { L } from 'shared/lib/abpUtility';

export interface IApproveUserProps {
  visible: boolean;
  onCancel: () => void;
  user: UserModel;
  onApprove: () => void;
  onReject: () => void;
  onRevaluate: () => void;
}

class ApproveUser extends React.Component<IApproveUserProps> {
  public renderUserModal() {
    return (
      <>
        <Form.Item label={L('Username')}>
          <Input placeholder="Username" value={this.props.user.userName} readOnly={true} />
        </Form.Item>
        <Form.Item label={L('Fullname')}>
          <Input placeholder="Full Name" value={this.props.user.fullName} readOnly={true} />
        </Form.Item>
      </>
    );
  }

  public renderEmployerModal() {
    return (
      <>
        <Form.Item label={L('Username')}>
          <Input placeholder="Username" value={this.props.user.userName} readOnly={true} />
        </Form.Item>
        <Form.Item label={L('Fullname')}>
          <Input placeholder="Full Name" value={this.props.user.fullName} readOnly={true} />
        </Form.Item>
        <Card title={L('Attachments')}>
          {/* {this.props.user.additionalData?.attachments.map((attachment) => (
            <p key={attachment.url}>{attachment.name}</p>
          ))} */}
          <Empty />
        </Card>
      </>
    );
  }

  public render() {
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title="Approve User"
          onCancel={this.props.onCancel}
          footer={[
            <Button type="primary" key="approve" onClick={this.props.onApprove}>
              {L('Approve')}
            </Button>,
            <Button type="danger" key="reject" onClick={this.props.onReject}>
              {L('Reject')}
            </Button>,
            <Button key="revaluate" onClick={this.props.onRevaluate}>
              {L('Revaluate')}
            </Button>,
          ]}
        >
          {this.props.user.accountType === AccountType.EMPLOYER ? this.renderEmployerModal() : this.renderUserModal()}
        </Modal>
      </div>
    );
  }
}

export default ApproveUser;
