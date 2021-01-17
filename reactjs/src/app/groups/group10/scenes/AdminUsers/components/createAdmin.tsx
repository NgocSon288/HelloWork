import { Button, Form, Input, Modal } from 'antd';
import CheckboxGroup from 'antd/lib/checkbox/Group';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { L } from 'shared/lib/abpUtility';
import { GetRoles } from 'shared/services/user/dto/getRolesOuput';
import rules from './createAdmin.validation';

export interface ICreateAdminProps extends FormComponentProps {
  visible: boolean;
  onCancel: () => void;
  onCreate: () => void;
  roles: GetRoles[];
}

class CreateAdmin extends React.Component<ICreateAdminProps> {
  state = {
    confirmDirty: false,
  };

  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  public renderCreateAdminInputs() {
    const options = this.props.roles.map((x: GetRoles) => {
      return { label: x.name, value: x.name, disabled: x.name === 'Admin' };
    });

    const { getFieldDecorator } = this.props.form;

    return (
      <>
        <Form.Item label={L('Username')}>{getFieldDecorator('userName', { rules: rules.userName })(<Input />)}</Form.Item>
        <Form.Item label={L('Password')}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^A-Za-z0-9]).{8,}$/gm,
                message: `The password must be at least 8 characters, contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special characters!`,
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label={L('ConfirmPassword')}>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: L('ConfirmPassword'),
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label={L('Fullname')}>{getFieldDecorator('name', { rules: rules.name })(<Input />)}</Form.Item>
        <Form.Item label={L('Roles')}>
          {getFieldDecorator('roleNames', {
            initialValue: ['Admin'],
          })(<CheckboxGroup options={options} />)}
        </Form.Item>
      </>
    );
  }

  public render() {
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title="Create admin"
          onCancel={this.props.onCancel}
          footer={[
            <Button type="danger" key="cancel" onClick={this.props.onCancel}>
              {L('Cancel')}
            </Button>,
            <Button type="primary" key="create" onClick={this.props.onCreate}>
              {L('Create')}
            </Button>,
          ]}
        >
          {this.renderCreateAdminInputs()}
        </Modal>
      </div>
    );
  }
}

export default Form.create<ICreateAdminProps>()(CreateAdmin);
