import * as React from 'react';

import { Form, Input, Modal} from 'antd';

//import CheckboxGroup from 'antd/lib/checkbox/Group';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
//import { GetRoles } from 'shared/services/user/dto/getRolesOuput';
import { L } from 'shared/lib/abpUtility';
import rules from './UpdateCompany.validation';


export interface IUpdateCompanyProps extends FormComponentProps {
  visible: boolean;
  onCancel: () => void;
  //modalType: string;
  onCreate: () => void;
}

class UpdateCompany extends React.Component<IUpdateCompanyProps> {
  state = {
    confirmDirty: false,
    selectedOption: null,
  };

  
  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 6 },
        md: { span: 6 },
        lg: { span: 6 },
        xl: { span: 6 },
        xxl: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 },
        md: { span: 18 },
        lg: { span: 18 },
        xl: { span: 18 },
        xxl: { span: 18 },
      },
    };


    //const { getFieldDecorator } = this.props.form;
    const { visible, onCancel, onCreate } = this.props;

    return (
      <Modal visible={visible} cancelText={L('Cancel')} okText={L('OK')} onOk={onCreate} onCancel={onCancel}  title={'Chỉnh sửa thông tin'}>
      <Form>
      <FormItem label={L('Tên doanh nghiệp')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('name',{ rules: rules.name })(<Input />)}
            </FormItem>
            <FormItem label={L('Tỉnh thành')} {...formItemLayout}>
            {(<Input />)}
            </FormItem>
            <FormItem label={L('Dòng giới thiệu')} {...formItemLayout}>
            <Input type="text" />
            </FormItem>
            <FormItem label={L('Địa chỉ')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('address',{ rules: rules.address })(<Input />)}
            </FormItem>
            <FormItem label={L('Email liên hệ')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('email',{ rules: rules.email })(<Input />)}
            </FormItem>
            <FormItem label={L('Số điện thoại')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('phoneNumber',{ rules: rules.phoneNumber })(<Input />)}
            </FormItem>
            <FormItem label={L('Trang web')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('website',{ rules: rules.website })(<Input />)}
            </FormItem>
            <FormItem label={L('Lĩnh vực hoạt động')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('expertise',{ rules: rules.expertise })(<Input />)}
            </FormItem>
            <FormItem label={L('Quy mô nhân sự')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('headcountLimit',{ rules: rules.headcountLimit })(<Input />)}
            </FormItem>
      </Form>
    </Modal>
    );
  }
}

export default Form.create<IUpdateCompanyProps>()(UpdateCompany);

