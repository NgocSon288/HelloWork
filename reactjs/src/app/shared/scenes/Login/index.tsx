import './index.less';

import * as React from 'react';

import {Button, Checkbox, Col, Form, Icon, Input, Modal, Row, Typography} from 'antd';
import {inject, observer} from 'mobx-react';

import AccountStore from 'shared/stores/accountStore';
import AuthenticationStore from 'shared/stores/authenticationStore';
import {FormComponentProps} from 'antd/lib/form';
import {L} from 'shared/lib/abpUtility';
import {Redirect, Link} from 'react-router-dom';
import SessionStore from 'shared/stores/sessionStore';
import Stores from 'app/shared/stores/storeIdentifier';
import TenantAvailabilityState from 'shared/services/account/dto/tenantAvailabilityState';
import rules from './index.validation';

import logo from '../../../../assets/images/login.svg';

const FormItem = Form.Item;
declare var abp: any;

export interface ILoginProps extends FormComponentProps {
    authenticationStore?: AuthenticationStore;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;
    history: any;
    location: any;
}

@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class Login extends React.Component<ILoginProps> {
    changeTenant = async () => {
        let tenancyName = this.props.form.getFieldValue('tenancyName');
        const {loginModel} = this.props.authenticationStore!;

        if (!tenancyName) {
            abp.multiTenancy.setTenantIdCookie(undefined);
            window.location.href = '/';
            return;
        } else {
            await this.props.accountStore!.isTenantAvailable(tenancyName);
            const {tenant} = this.props.accountStore!;
            switch (tenant.state) {
                case TenantAvailabilityState.Available:
                    abp.multiTenancy.setTenantIdCookie(tenant.tenantId);
                    loginModel.tenancyName = tenancyName;
                    loginModel.toggleShowModal();
                    window.location.href = '/';
                    return;
                case TenantAvailabilityState.InActive:
                    Modal.error({title: L('Error'), content: L('TenantIsNotActive')});
                    break;
                case TenantAvailabilityState.NotFound:
                    Modal.error({title: L('Error'), content: L('ThereIsNoTenantDefinedWithName{0}', tenancyName)});
                    break;
            }
        }
    };

    handleSubmit = async (e: any) => {
        e.preventDefault();
        const {loginModel} = this.props.authenticationStore!;
        await this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                await this.props.authenticationStore!.login(values);
                sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
                const {state} = this.props.location;
                window.location = state ? state.from.pathname : '/';
            }
        });
    };

    public render() {
        let {from} = this.props.location.state || {from: {pathname: '/'}};
        if (this.props.authenticationStore!.isAuthenticated) return <Redirect to={from}/>;

        const {loginModel} = this.props.authenticationStore!;
        const {getFieldDecorator/*, getFieldValue*/} = this.props.form;
        return (
            <div className="login-screen">
                <div className="signup-area">
                    <Col className="name">
                        <Form className="" onSubmit={this.handleSubmit}>
                            <Row>
                                {/*<Row style={{marginTop: 100}}>*/}
                                {/*    <Col span={8} offset={8}>*/}
                                {/*        <Card>*/}
                                {/*            <Row>*/}
                                {/*                {!!this.props.sessionStore!.currentLogin.tenant ? (*/}
                                {/*                    <Col span={24} offset={0} style={{textAlign: 'center'}}>*/}
                                {/*                        <Button type="link" onClick={loginModel.toggleShowModal}>*/}
                                {/*                            {L('CurrentTenant')} : {this.props.sessionStore!.currentLogin.tenant.tenancyName}*/}
                                {/*                        </Button>*/}
                                {/*                    </Col>*/}
                                {/*                ) : (*/}
                                {/*                    <Col span={24} offset={0} style={{textAlign: 'center'}}>*/}
                                {/*                        <Button type="link" onClick={loginModel.toggleShowModal}>*/}
                                {/*                            {L('NotSelected')}*/}
                                {/*                        </Button>*/}
                                {/*                    </Col>*/}
                                {/*                )}*/}
                                {/*            </Row>*/}
                                {/*        </Card>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}

                                {/*<Row>*/}
                                {/*    <Modal*/}
                                {/*        visible={loginModel.showModal}*/}
                                {/*        onCancel={loginModel.toggleShowModal}*/}
                                {/*        onOk={this.changeTenant}*/}
                                {/*        title={L('ChangeTenant')}*/}
                                {/*        okText={L('OK')}*/}
                                {/*        cancelText={L('Cancel')}*/}
                                {/*    >*/}
                                {/*        <Row>*/}
                                {/*            <Col span={8} offset={8}>*/}
                                {/*                <h3>{L('TenancyName')}</h3>*/}
                                {/*            </Col>*/}
                                {/*            <Col>*/}
                                {/*                <FormItem>*/}
                                {/*                    {getFieldDecorator('tenancyName', {})(*/}
                                {/*                        <Input placeholder={L('TenancyName')}*/}
                                {/*                               prefix={<Icon type="user"*/}
                                {/*                                             style={{color: 'rgba(0,0,0,.25)'}}/>}*/}
                                {/*                               size="large"/>*/}
                                {/*                    )}*/}
                                {/*                </FormItem>*/}
                                {/*                {!getFieldValue('tenancyName') ?*/}
                                {/*                    <div>{L('LeaveEmptyToSwitchToHost')}</div> : ''}*/}
                                {/*            </Col>*/}
                                {/*        </Row>*/}
                                {/*    </Modal>*/}
                                {/*</Row>*/}
                                <Row style={{marginTop: 10}}>
                                    <Col xs={12} style={{paddingRight: '5px'}}>
                                        <Typography.Title>Đăng ký</Typography.Title>
                                        <Typography.Text strong><>Chưa có tài khoản? </><Link to="/register">Đăng ký</Link></Typography.Text>
                                        <FormItem label="Tên tài khoản">
                                            {getFieldDecorator('userNameOrEmailAddress', {rules: rules.userNameOrEmailAddress})(
                                                <Input placeholder={L('UserNameOrEmail')}
                                                       prefix={<Icon type="user"
                                                                     style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                       size="large"/>
                                            )}
                                        </FormItem>

                                        <FormItem label="Mật khẩu">
                                            {getFieldDecorator('password', {rules: rules.password})(
                                                <Input
                                                    placeholder={L('Mật khẩu')}
                                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                    type="password"
                                                    size="large"
                                                />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Checkbox checked={loginModel.rememberMe}
                                                      onChange={loginModel.toggleRememberMe}
                                                      style={{paddingRight: 8}}/>
                                            {L('Duy trì đăng nhập')}
                                            <br/>
                                            {/* <a>{L('ForgotPassword')}</a> */}
                                        </FormItem>
                                        <FormItem>
                                            <Button htmlType={'submit'} size="large" type="primary" style={{width: "100%"}}>
                                                {L('Đăng nhập')}
                                            </Button>
                                        </FormItem>
                                        <FormItem>
                                            <Link to="/forget">Quên mật khẩu?</Link>
                                        </FormItem>
                                    </Col>
                                    <Col xs={12}>
                                        <img src={logo} style={{margin: 'auto'}}/>
                                    </Col>
                                </Row>
                            </Row>
                        </Form>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);
