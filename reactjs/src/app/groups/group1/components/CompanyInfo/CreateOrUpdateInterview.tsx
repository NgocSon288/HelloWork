import * as React from 'react';

import { Form, Input, Modal} from 'antd';

//import CheckboxGroup from 'antd/lib/checkbox/Group';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
//import { GetRoles } from 'shared/services/user/dto/getRolesOuput';
import { L } from 'shared/lib/abpUtility';
import rules from './CreateOrUpdateInterview.validation';
import '../../styles.less'

export interface ICreateOrUpdateInterviewProps extends FormComponentProps {
  visible: boolean;
  onCancel: () => void;
  //modalType: string;
  onCreate: () => void;
}

class CreateOrUpdateInterview extends React.Component<ICreateOrUpdateInterviewProps> {
  state = {
    confirmDirty: false,
    selectedOption: null,
  };

  
  render() {

    


    //const { getFieldDecorator } = this.props.form;
    const { visible, onCancel, onCreate } = this.props;

    return (
      <Modal visible={visible} cancelText={L('Cancel')} okText={L('OK')} onOk={onCreate} onCancel={onCancel}  title={'Lịch hẹn phỏng vấn'}>
      <Form>
            <FormItem label={L('Ứng viên')} >
            {this.props.form.getFieldDecorator('idJobSeeker',{ rules: rules.JSname })(<Input disabled={true} style={{backgroundColor:"#F5F5F5 "}} />)}
            </FormItem>
            <FormItem label={L('Công việc')} >
            {this.props.form.getFieldDecorator('idRecuitment',{ rules: rules.RMname })(<Input disabled={true} style={{backgroundColor:"#F5F5F5 "}} />)}
            </FormItem>
            <FormItem label={L('Ngày phỏng vấn')} >
            {this.props.form.getFieldDecorator('interviewTime',{ rules: rules.date })(<Input />)}
            </FormItem>
            <FormItem label={L('Địa chỉ phỏng vấn')} >
            {this.props.form.getFieldDecorator('location',{ rules: rules.address })(<Input />)}
            </FormItem>
            <FormItem label={L('Nội dung phỏng vấn')} >
            {this.props.form.getFieldDecorator('description',{ rules: rules.description })(<Input />)}
            </FormItem>
      </Form>
    </Modal>
    );
  }
}

export default Form.create<ICreateOrUpdateInterviewProps>()(CreateOrUpdateInterview);

