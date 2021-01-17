import React from 'react';
import {Button, Col, Form, Input, Row, Select, Typography} from "antd";
import {Link} from "react-router-dom";

const EmployerRegister = Form.create({name: 'employer-register'})(({form}: any) => {
    const {getFieldDecorator}: any = form;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.validateFields((err: any, values: any) => {
            if (err) {

            }
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Link to="/register" className="back-link">Quay về trang trước</Link>
                <Typography.Title level={2}>Thông tin doanh nghiệp</Typography.Title>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form.Item label="Tên doanh nghiệp">
                        {getFieldDecorator('employer_name', {
                            rules: [
                                {required: true, message: 'Vui lòng nhập tên doanh nghiệp'}
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Lĩnh vực hoạt động">
                        {getFieldDecorator('operate_field', {
                            rules: [
                                {required: true, message: 'Vui lòng chọn lĩnh vực hoạt động'}
                            ]
                        })(<Select>
                            <Select.Option value="IT">IT - Phần mềm</Select.Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="Quy mô nhân sự">
                        {getFieldDecorator('employee_number', {
                            rules: [
                                {required: true, message: 'Vui lòng chọn quy mô'}
                            ]
                        })(<Select>
                            <Select.Option value="1 - 5">1 - 5 người</Select.Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="Vị trí công việc bản thân">
                        {getFieldDecorator('employer_name', {
                            rules: [
                                {required: true, message: 'Vui lòng chọn vị trí'}
                            ]
                        })(<Select>
                            <Select.Option value="Trưởng phòng nhân sự">Trưởng phòng nhân sự</Select.Option>
                        </Select>)}
                    </Form.Item>
                </Col>
                <Col xs={12}>
                    <Form.Item label="Website doanh nghiệp">
                        {getFieldDecorator('employer_name')(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Giới thiệu về doanh nghiệp">
                        {getFieldDecorator('employer_name')(
                            <Input.TextArea rows={8}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                                style={{marginTop: "inherit"}}>
                            Tiếp tục
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
});

export default EmployerRegister;
