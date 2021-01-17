import React from 'react';
import {Button, Col, Form, Row, Select, Typography} from "antd";
import {Route, Switch, useHistory} from "react-router-dom";

import logoImg from '../../../../assets/images/signup.svg';
import './index.less';
import EmployerRegister from "./EmployerRegister";
import EmployeeRegister from "./EmployeeRegister";

const Register = () => {
    return (
        <div className="login-screen">
            <div className="signup-area">
                <Switch>
                    <Route exact path="/register" component={SelectUserType}/>
                    <Route exact path="/register/employee"
                           component={EmployeeRegister}/>
                    <Route exact path="/register/employer"
                           component={EmployerRegister}/>
                </Switch>
            </div>
        </div>
    );
};

const SelectUserType = () => {
    return (
        <Row>
            <Col xs={12}>
                <Row>
                    <Col>
                        <Typography.Title>Đăng ký</Typography.Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SelectUserTypeForm/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12}>
                <img src={logoImg}/>
            </Col>
        </Row>
    );
};

const SelectUserTypeForm = Form.create({name: 'register-select-type'})(({form}: any) => {
    const history = useHistory();

    const {getFieldDecorator}: any = form;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.validateFields((err: any, values: any) => {
            if (!err) {
                if (values.user_type == "employee") {
                    history.push('/register/employee')
                    return;
                }
                if (values.user_type == "employer") {
                    history.push('/register/employer')
                    return;
                }
            }
        });
    };

    return (
        <Form className="signup-form" onSubmit={handleSubmit}>
            <Form.Item label="Bạn là">
                {getFieldDecorator('user_type', {
                    rules: [
                        {required: true, message: 'Vui lòng chọn loại tài khoản!'}
                    ]
                })(
                    <Select placeholder="Chọn loại tài khoản...">
                        <Select.Option value="employee">Người tìm việc</Select.Option>
                        <Select.Option value="employer">Nhà tuyển dụng</Select.Option>
                    </Select>
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Tiếp tục
                </Button>
            </Form.Item>
        </Form>
    );
});



export default Register;
