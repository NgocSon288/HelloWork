import '../../styles.less';
import './UpdateRecruitments.less';
import { inject, observer } from 'mobx-react';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
// import JobTypeStore from '../../stores/jobTypeStore';
import RecruitmentsStore from '../../stores/recruitmentsStore';
import ExpertisesStore from '../../stores/expertisesStore';
import { IRecruitmentsUpdate } from '../../models/recruitments';
import { IExpertise } from '../../models/expertises';

import React from 'react';
import { Col, Row, Form, Input, Select, Button, DatePicker, Typography, Modal } from 'antd';
import moment from 'moment';
import rules from './UpdateRecruitments.validation';
import { FormComponentProps } from 'antd/lib/form';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface IRecruitmentsProps extends FormComponentProps {
    // jobTypeStore: JobTypeStore;
    recruitmentsStore: RecruitmentsStore,
    expertisesStore: ExpertisesStore
}



export interface IRecruitmentsState {
    recruitment: IRecruitmentsUpdate,
    descriptionClass: string
}
@inject(Stores.recruitmentsStore)
@inject(Stores.expertisesStore)
@observer
class UpdateRecruitment extends AppComponentBase<IRecruitmentsProps, IRecruitmentsState> {



    constructor(props: any) {
        super(props);
        this.state = {
            recruitment: {
                id: this.idRecruitment,
                name: '',
                finishDate: '2020-11-20T00:00:00',
                wayOfWork: 'fulltime',
                salaryRange: 'thuongluong',
                expertises: [
                    { id: 1, name: '' },
                    { id: 1, name: '' },
                    { id: 1, name: '' },
                    { id: 1, name: '' }
                ],
                urgentLevel: 'normal',
                description: '',
                requirement: '',
                contactEmail: '',
                state: 'nhap'
            },
            descriptionClass: 'description'
        }

    }

    errorValidate = false;
    errorExpertise = false;
    errorDescription = false;
    idRecruitment = '25';

    test () {
        console.log(this.errorValidate);
        console.log(this.errorExpertise);
        console.log(this.errorDescription);
    }

    async componentDidMount() {
        const pathArray = window.location.pathname.split('/');
        const pathLast =pathArray[pathArray.length - 1].split('-');
        this.idRecruitment = pathLast[pathLast.length - 1];

        await this.props.recruitmentsStore.getRecruitmentById(this.idRecruitment);
        await this.props.expertisesStore.getExpertiseAll();

        this.setState({
            recruitment: this.props.recruitmentsStore.recruitment
        });

        for (let i = this.state.recruitment.expertises.length; i < 4; i++) {
            const expertiseNull = { id: 1, name: '' }
            this.state.recruitment.expertises.push(expertiseNull);
        }

        for (let i = 0; i < 4; i++) {
            if(this.state.recruitment.expertises[i].id === 24) {
                this.state.recruitment.expertises.splice(i, 1);
            }
        }
    }

    handleChangeInput = (event: any) => {
        const { target: { name, value } } = event
        let items = this.state.recruitment;
        items = JSON.parse(JSON.stringify(items));
        items[`${name}`] = value;
        this.setState({
            recruitment: items,
        });
    }

    descriptionLength = 100;

    handleChangeDescription = (value: any, delta: any, source: any, editor: any) => {
        this.descriptionLength = editor.getLength();
        if (editor.getLength() < 100) {
            this.errorDescription = true;
        } else {
            this.errorDescription = false;
            this.props.form.setFields({
                description: {
                    errors: null,
                },
            });
            
            this.setState({
                descriptionClass: 'description'
            })
        }
        let items = this.state.recruitment;
        items = JSON.parse(JSON.stringify(items));
        items['description'] = value;
        this.setState({
            recruitment: items,
        });
    }

    handleChangeRequirement = (value: any) => {
        let items = this.state.recruitment;
        items = JSON.parse(JSON.stringify(items));
        items['requirement'] = value;
        this.setState({
            recruitment: items,
        });
    }

    handleChangeSelect = (name: string, event: any) => {
        let items = this.state.recruitment;
        items = JSON.parse(JSON.stringify(items));
        items[`${name}`] = event;
        this.setState({
            recruitment: items,
        });
    }

    handleChangeExpertises = (id: number, op: any) => {
        let items = this.state.recruitment;
        items = JSON.parse(JSON.stringify(items));
        items.expertises[id].id = (op.props.value === 24) ? 1 : op.props.value;
        items.expertises[id].name = (op.props.value === 24) ? '' : op.props.children;
        this.setState({
            recruitment: items,
        });
        this.errorExpertise = !this.checkSelectedOneExpertise(items.expertises);
        if (this.errorExpertise) {
            this.props.form.setFields({
                expertises: {
                  errors: [new Error('Vui lòng chọn ít nhất một chuyên môn')],
                },
            });
        } else {
            this.props.form.setFields({
                expertises: {
                  errors: null,
                },
            });
        }
        
        console.log(items.expertises);
    }

    checkSelectedOneExpertise = (expertises: IExpertise[]) => {
        for (const expertise of expertises) {
            if (expertise.id !== 1 && expertise.id !== 24) {
                return true;
            }
        }
        return false;
    }

    handleBlurDescription = (previousRange: any, source: any, editor: any) => {
        if (editor.getLength() < 100) {
            this.props.form.setFields({
                description: {
                    errors: [new Error('Mô tả công việc phải nhiều hơn 100 kí tự')],
                },
            });
            this.setState({
                descriptionClass: 'description error-textarea'
            })
        }
    }

    handleChangeDate = (date: any, dateString: string) => {
        const name = 'finishDate';
        let items = this.state.recruitment;
        items = JSON.parse(JSON.stringify(items));
        items[`${name}`] = moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setState({
            recruitment: items,
        });
    }

    updateRecruitment = async () => {
        console.log(this.state.recruitment);
        await this.props.recruitmentsStore.updateRecruitment(this.state.recruitment);
    }

    disabledDate(current: any) {
        return current && current < moment().add(-1,'days');
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (this.descriptionLength < 100) {
            this.props.form.setFields({
                description: {
                    errors: [new Error('Mô tả công việc phải nhiều hơn 100 kí tự')],
                },
            });
            this.setState({
                descriptionClass: 'description error-textarea'
            })
        }
        this.props.form.validateFields( (err: any, values: any) => {
            if (err === null && !this.errorDescription && !this.errorExpertise) {
                this.updateRecruitment();
            }
        });
    };

    cancel() {
        const { confirm } = Modal;
        confirm({
        title: 'Bạn có thực sử muốn thoát',
        okText: 'Thoát',
        cancelText: 'Hủy bỏ',
        centered: true,
        onOk() {
            window.location.href = '/recruimentPosts';
        },
        onCancel() {},
        });
    }

    render() {
        const { recruitment } = this.props.recruitmentsStore;
        const { expertises } = this.props.expertisesStore;
        if (recruitment === undefined) return (<div></div >)
        if (expertises === undefined) return (<div></div >)

        const { Option } = Select;
        const { Title, Text } = Typography;
        const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form;

        const formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'color',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]

        const modules = {
            toolbar: [
                [{ 'header': []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}],
                [{'list': 'ordered'}, {'list': 'bullet'}, 
                {'indent': '-1'}, {'indent': '+1'}, 'image', 'link']
            ],
            clipboard: {
              matchVisual: false,
            }
        }

        this.errorValidate = (!!isFieldTouched('name') && !!getFieldError('name'));

        return (
            <div className="container-center">
                <Form layout='horizontal' onSubmit={this.handleSubmit}>
                    <Title style={{padding: '0px 40px'}}>Chỉnh sửa tin tuyển dụng</Title>
                    <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Col span={12} style={{padding: '0px 20px 0px 40px'}}>
                            <Form.Item label='Mã số tin tuyển dụng'>
                                <Input defaultValue={this.props.recruitmentsStore.recruitment?.id} disabled />
                            </Form.Item>
                            <Form.Item label='Vị trí công việc *'>
                                {getFieldDecorator('name', { initialValue: this.props.recruitmentsStore.recruitment?.name, rules: rules.name, validateTrigger: 'onBlur' })(
                                    <Input placeholder='Tên vị trí' name="name" onChange={this.handleChangeInput}/>
                                )}
                            </Form.Item>
                            <Form.Item label='Ngày kết thúc *'>
                                <DatePicker
                                    style={{display: 'block'}}
                                    format="DD/MM/YYYY"
                                    disabledDate={this.disabledDate}
                                    defaultValue={moment(new Date(this.props.recruitmentsStore.recruitment?.finishDate))}
                                    name="finishDate"
                                    onChange={this.handleChangeDate}
                                />
                            </Form.Item>
                            <Form.Item label='Hình thức công việc *'>
                                <Select defaultValue={this.props.recruitmentsStore.recruitment?.wayOfWork} onChange={(e: any) => this.handleChangeSelect('wayOfWork', e)}>
                                    <Option value='fulltime'>Fulltime</Option>
                                    <Option value='parttime'>Part time</Option>
                                    <Option value='intern'>Intern</Option>
                                    <Option value='remote'>Remote</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label='Khoảng lương *'>
                                <Select defaultValue={this.props.recruitmentsStore.recruitment?.salaryRange} onChange={(e: any) => this.handleChangeSelect('salaryRange', e)}>
                                    <Option value='thuongluong'>Thương lượng</Option>
                                    <Option value='<1m'>Dưới 1 triệu</Option>
                                    <Option value='1-5m'>1 - 5 triệu</Option>
                                    <Option value='5-10m'>5 - 10 triệu</Option>
                                    <Option value='10-20m'>10 - 20 triệu</Option>
                                    <Option value='20-50m'>20 - 50 triệu</Option>
                                    <Option value='50-100m'>50 - 100 triệu</Option>
                                    <Option value='>100m'>Trên 100 triệu</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className='ant-form-item-required' label='Mảng chuyên môn *'>
                                <Row>
                                    <Col span={12} style={{paddingRight: '8px'}}>
                                        {getFieldDecorator('expertises')(
                                            <Select style={{ display: "none" }}></Select>
                                        )}
                                        <Select
                                            placeholder='Chọn chuyên môn'
                                            defaultValue={this.props.recruitmentsStore.recruitment.expertises[0]?.id}
                                            onChange={(e: any, op: any) => this.handleChangeExpertises(0, op)}
                                        >
                                            {this.props.expertisesStore?.expertises.items.map((value) => {
                                                return <Option value={value.id}>{value.name}</Option>
                                            })}
                                            <Option value={1}>Bỏ chọn chuyên môn</Option>
                                        </Select>
                                    </Col>
                                    <Col span={12} style={{paddingLeft: '8px'}}>
                                        <Select
                                            placeholder='Chọn chuyên môn'
                                            defaultValue={this.props.recruitmentsStore.recruitment.expertises[1]?.id}
                                            onChange={(e: any, op: any) => this.handleChangeExpertises(1, op)}
                                        >
                                            {this.props.expertisesStore?.expertises.items.map((value) => {
                                                return <Option value={value.id}>{value.name}</Option>
                                            })}
                                            <Option value={1}>Bỏ chọn chuyên môn</Option>
                                        </Select>
                                    </Col>
                                    <Col span={12} style={{paddingRight: '8px'}}>
                                        <Select
                                            placeholder='Chọn chuyên môn'
                                            defaultValue={this.props.recruitmentsStore.recruitment.expertises[2]?.id}
                                            onChange={(e: any, op: any) => this.handleChangeExpertises(2, op)}
                                        >
                                            {this.props.expertisesStore?.expertises.items.map((value) => {
                                                return <Option value={value.id}>{value.name}</Option>
                                            })}
                                            <Option value={1}>Bỏ chọn chuyên môn</Option>
                                        </Select>
                                    </Col>
                                    <Col span={12} style={{paddingLeft: '8px'}}>
                                        <Select
                                            placeholder='Chọn chuyên môn'
                                            defaultValue={this.props.recruitmentsStore.recruitment.expertises[3]?.id}
                                            onChange={(e: any, op: any) => this.handleChangeExpertises(3, op)}
                                        >
                                            {this.props.expertisesStore?.expertises.items.map((value) => {
                                                return <Option value={value.id}>{value.name}</Option>
                                            })}
                                            <Option value={1}>Bỏ chọn chuyên môn</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <div className="ant-form-item-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Mức độ cấp thiết *</span>
                                    <span>Bạn còn <Text type="warning" style={{fontWeight: 700}}>0</Text> lượt đăng tin gấp</span>
                                </div>
                                <Select
                                    defaultValue={this.props.recruitmentsStore.recruitment?.urgentLevel}
                                    onChange={(e: any) => this.handleChangeSelect('urgentLevel', e)}
                                >
                                    <Option value='normal'>Bình thường</Option>
                                    <Option value='immediately'>Đang cần gấp</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{padding: '0px 40px 0px 20px'}}>
                            <Form.Item className='ant-form-item-required' label='Mô tả công việc'>
                                {getFieldDecorator('description')(
                                    <Input name="description" style={{ display: "none" }} />
                                )}
                                <ReactQuill theme="snow"
                                    className={this.state.descriptionClass}
                                    formats={formats} modules={modules}
                                    onChange={this.handleChangeDescription}
                                    defaultValue={this.props.recruitmentsStore.recruitment?.description}
                                    onBlur={this.handleBlurDescription}
                                />
                            </Form.Item>
                            <Form.Item label='Yêu cầu công việc'>
                                <ReactQuill defaultValue={this.props.recruitmentsStore.recruitment?.requirement} theme="snow" className="requirement" formats={formats} modules={modules} onChange={this.handleChangeRequirement}/>
                            </Form.Item>
                            <Form.Item label='Email liên hệ'>
                                <Input
                                    name="contactEmail" onChange={this.handleChangeInput} disabled
                                    defaultValue={this.props.recruitmentsStore.recruitment?.contactEmail}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                        <Col span={12} style={{padding: '0px 20px 0px 40px'}}>
                            <Button style={{ width: '150px' }} type="primary" >Mua thêm gói</Button>
                        </Col>
                        <Col span={12} style={{padding: '0px 40px 0px 20px'}}>
                            <Row style={{ display: 'flex' }} justify="center">
                                <Col span={10} style={{ marginRight: 'auto' }}>
                                    <Select
                                        defaultValue={this.props.recruitmentsStore.recruitment?.state}
                                        onChange={(e: any) => this.handleChangeSelect('state', e)}
                                    >
                                        <Option value='temp'>Bản nháp</Option>
                                        <Option value='activate'>Đang hoạt động</Option>
                                        <Option value='done'>Kết thúc</Option>
                                    </Select>
                                </Col>
                                <Col span={12} style={{ textAlign: 'end' }}>
                                    <Button onClick={(e: any) => this.cancel()} style={{background: 'rgb(245, 245, 245)', width: '100px', marginRight: '20px'}}>Hủy</Button>
                                    <Button
                                        className={(this.errorValidate || this.errorDescription || this.errorExpertise) ? 'not-validate' : ''}
                                        style={{ width: '100px' }} type="primary"
                                        htmlType={'submit'}
                                    >Lưu</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default Form.create()(UpdateRecruitment);