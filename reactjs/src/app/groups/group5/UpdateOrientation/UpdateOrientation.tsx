import * as React from 'react';

import { Form, Input, Modal} from 'antd';

//import CheckboxGroup from 'antd/lib/checkbox/Group';
import { FormComponentProps } from 'antd/lib/form';
// import FormItem from 'antd/lib/form/FormItem';
//import { GetRoles } from 'shared/services/user/dto/getRolesOuput';  
import { L } from 'shared/lib/abpUtility';
//import rules from './UpdateOrientation.validation';
// import CustomModal from '../../Component/CustomModal/CustomModal'

export interface IUpdateOrientationProps extends FormComponentProps {
  visible: boolean;
  onCancel: () => void;
  //modalType: string;
  onCreate: () => void;
}

class UpdateOrientation extends React.Component<IUpdateOrientationProps> {
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
      <Modal visible={visible} cancelText={L('Hủy thay đổi')} okText={L('Lưu thay đổi')} onOk={onCreate} onCancel={onCancel}  title={'Chỉnh sửa định hướng công việc'}>
      <Form>
      <Form.Item label={L('Định hướng công việc')} {...formItemLayout}>
            {/* {this.props.form.getFieldDecorator('name',{ rules: rules.name }) */}
            {(<Input />)}
            </Form.Item>
            <Form.Item label={L('Mô tả')} {...formItemLayout}>
            {(<Input />)}
            </Form.Item>
            
      </Form>
    </Modal>
    );
  }
}

export default Form.create<IUpdateOrientationProps>()(UpdateOrientation);

