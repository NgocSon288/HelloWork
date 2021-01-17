import React, {useState} from 'react';
import {Button, Col, DatePicker, Form, Input, message, Row, Select, Typography} from "antd";
import {Link, useHistory} from "react-router-dom";
import userService from "../../../../shared/services/user/userService";

const EmployeeRegister = Form.create({name: 'employee-register'})(({form}: any) => {
    const {getFieldDecorator}: any = form;
    const history = useHistory();

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.validateFields((err: any, values: any) => {
            if (err) return;
            setLoading(true);
            message.loading("Vui lòng chờ...");
            (async () => {
                try {
                    await userService.register({
                        emailAddress: values.email,
                        id: 0,
                        isActive: true,
                        name: values.username,
                        password: values.password,
                        roleNames: [],
                        surname: values.full_name,
                        userName: values.username,
                    });
                    message.success("Đăng ký thành công! Vui lòng đăng nhập");
                    history.push('/login');
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            })();
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Link to="/register" className="back-link">Quay về trang trước</Link>
                <Typography.Title level={2}>Thông tin người dùng</Typography.Title>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form.Item label="Tên tài khoản">
                        {getFieldDecorator('username', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập tên tài khoản'}
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Mật khẩu">
                        {getFieldDecorator('password', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập mật khẩu'}
                            ]
                        })(<Input.Password/>)}
                    </Form.Item>
                    <Form.Item label="Họ và tên">
                        {getFieldDecorator('full_name', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập họ và tên'}
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập email'}
                            ]
                        })(<Input type="email"/>)}
                    </Form.Item>
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <Form.Item label="Số điện thoại">
                                {getFieldDecorator('phone', {
                                    rules: [
                                        {required: true, message: 'Vui lòng nhập số điện thoại'}
                                    ]
                                })(<Input/>)}
                            </Form.Item>
                        </Col>
                        <Col xs={12}>
                            <Form.Item label="Ngày sinh">
                                {getFieldDecorator('birthday', {
                                    rules: [
                                        {required: true, message: 'Vui lòng chọn ngày sinh'}
                                    ]
                                })(<DatePicker/>)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="Tỉnh thành">
                        {getFieldDecorator('province', {
                            rules: [
                                {required: true, message: 'Vui lòng chọn tỉnh thành'}
                            ]
                        })(
                            <Select>
                                <Select.Option value="TP. HCM">TP. HCM</Select.Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="Địa chỉ">
                        {getFieldDecorator('address', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập địa chỉ'}
                            ]
                        })(
                            <Input/>
                        )}
                    </Form.Item>
                    <Form.Item label="Số CMND / CCCD">
                        {getFieldDecorator('identify_number', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập số CMND / CCCD'}
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                            Tiếp tục
                        </Button>

                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
});

export default EmployeeRegister;
