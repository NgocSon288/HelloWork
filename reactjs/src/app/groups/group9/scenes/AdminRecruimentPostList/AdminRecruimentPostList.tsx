import React from 'react';
import '../../styles.less';
import './AdminRecruitmentPostList.less';
import { inject, observer } from 'mobx-react';
// import { ClickAwayListener } from '@material-ui/core';
// import CustomModal from 'app/shared/components/CustomModal/CustomModal';
import { DeleteRcruitment } from '../../services/dto/RecruimentPostDTO/DeleteRecruitmentPostInput';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import recruitmentPostStore from '../../stores/recruitmentPostStore';
import SessionStore from 'shared/stores/sessionStore';
import { Form, Input, Select, Button, Row, Col, Table, Checkbox, Modal, notification } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export interface IRecruimentPostListProps {
    recruitmentPostStore: recruitmentPostStore;
    sessionStore: SessionStore;
}
  
export interface AdminRecruimentPostListState {
    modalVisible: boolean;
    selectedID: number;
    isAnyItemClicked: boolean;
    openViolateReports: boolean;
    openReportDetails: boolean;
    allChecked: boolean;
    listItem: any[];
    filterAttributes: any;
}

@inject(Stores.recruitmentPostStore, Stores.SessionStore)
@observer
export default class AdminRecruimentPostList extends AppComponentBase<IRecruimentPostListProps, AdminRecruimentPostListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedID: 0,
            isAnyItemClicked: false,
            openViolateReports: false,
            openReportDetails: false,
            allChecked: false,
            listItem: [],
            filterAttributes: {
                'id': '',
                'name': '',
                'state': '',
                'urgentLevel': '',
            }
          };
    }

    async componentDidMount() {
        await this.getAll();

        let STT = 0;
        let items: any = this.props.recruitmentPostStore.recruitmentPosts.items;
        items.forEach( function(item: any) {
            item.index = ++STT;
            item.isChecked = false;
            item.enabled = true;
        });
        this.setState({listItem: items});
    }

    Modal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    };

    async getAll() {
        await this.props.recruitmentPostStore.getAll();
    }

    handleCreate = () => {
    };

    handleDelete = () => {
    }

    closeAllSelectedItem = () => {

    }

    handleEdit = () => {

    }

    handleItemClicked = (event: any, itemId: number) => {
        let itemClicked = event.target;
    
        let itemName = itemClicked.name;
        let checked = itemClicked.checked;
    
        this.setState(prevState => {
            let { isAnyItemClicked, listItem, allChecked } = prevState;
            if (itemName == 'checkAll') {
                allChecked = checked;
                isAnyItemClicked = checked;
                listItem = listItem.map(item => item.enabled === true ? { ...item, isChecked: checked } : {...item});
            } else {
                listItem = listItem.map((item) =>
                    item.id === itemId ? { ...item, isChecked: checked } : {...item}
                );
        
                // handle all checked and isAnyItemClicked
                allChecked = listItem.every(item => item.enabled === true ? item.isChecked : true);
                isAnyItemClicked = listItem.some(function (item) {
                    return item.enabled === true ? item.isChecked : false;
                });
        
                let all_item = document.getElementsByClassName('custom-table-line-activated');
                for (let i = 0; i < all_item.length; i++) {
                    all_item[i].className = 'custom-table-line';
                }
        
                let rowClicked: any = itemClicked.parentElement.parentElement;
                rowClicked.className = 'custom-table-line-activated';
        
            }
            return { isAnyItemClicked, listItem, allChecked };
        });
    
        event.stopPropagation();
    }

    handleRowClicked = (record: any, index: number, event: any) => {
        let parentTag = event.target.parentElement;
        let checkboxTag = parentTag.querySelector('input[type="checkbox"]');
        checkboxTag.click();
    }

    handleClickedFilterButton = () => {
        let { listItem } = this.state;

        const filterAttributes = this.state.filterAttributes;

        listItem.forEach( function(item: any) {
            item.isChecked = false;
            item.enabled = true;
            let resultFilterItem = Object.keys(filterAttributes).every(function(key) {
                if(filterAttributes[key] == 'Tất cả' || filterAttributes[key] == '') return true;
                if(filterAttributes[key] == item[key]) return true;
                return false;
            });

            if(!resultFilterItem) item.enabled = false;
        });

        this.setState({listItem: listItem, allChecked: false, isAnyItemClicked: false});
    }

    handleClickedForbiddenButton = () => {
        let selectedItems: any = this.state.listItem.filter(item => item.isChecked && item.enabled);
        let remainItems: any = this.state.listItem.filter(item => !item.isChecked);
        let recruitmentPostStore: recruitmentPostStore = this.props.recruitmentPostStore;
        Modal.confirm({
            title: `Bạn có chắc chắn muốn cấm ${selectedItems.length} tin tuyển dụng này?`,
            onOk: () => {
                let tmpSelectedIDs: any[] = [];

                selectedItems.forEach(function(item: any) {
                    tmpSelectedIDs.push(item.id);
                    let dto: DeleteRcruitment = {id: item.id};
                    recruitmentPostStore.deleteRecruitment(dto);
                });

                this.setState({ listItem: remainItems });
            },
            onCancel() {
            },
        });


    }

    handleClickedReportDetailsButton = () => {
        let selectedItems: any = this.state.listItem.filter(item => item.isChecked && item.enabled);
        if(selectedItems.length > 1) {
            notification['warning']({
                message: 'Lưu ý',
                description:
                  'Không thể xem nhiều chi tiết báo cáo khác nhau, bạn chỉ có thể chọn xem chi tiết của 1 tin tuyển dụng!',
                duration: 2
            });
            return;
        } 

        let itemID = selectedItems[0].id;
        console.log(itemID);
        this.setState({ openViolateReports: true});

    }

    handleOnChangeFilterBar = (value: any, event: any, filter_name: string) => {
        let name = (filter_name.replace('filter-', '')).trim();
        this.setState({ 
          filterAttributes: {
            ...this.state.filterAttributes, 
            [`${name}`]: value
          }
        }, () =>{
        });
    }

    public render() {
        const { Option } = Select;
        const columns = [
            { 
                title: ('STT'),
                dataIndex: 'index',
                align: 'center' as 'center',
            },
            { 
                title: ('Mã số'),
                dataIndex: 'id',
                align: 'center' as 'center', 
            },
            { 
                title: ('Vị trí công việc'),
                dataIndex: 'name',
                align: 'center' as 'center', 
            },
            { 
                title: ('Trạng thái'),
                dataIndex: 'state', 
                align: 'center' as 'center',
            },
            { 
                title: ('Độ cấp thiết'),
                dataIndex: 'urgentLevel', 
                align: 'center' as 'center',
            },
            { 
                title: ('Số lượng ứng viên'),
                align: 'center' as 'center', 
                render: (text: string) => ''
            },
            { 
                title: ('Số lần bị báo cáo'),
                align: 'center' as 'center',
                render: (text: string) => ''
            },
            {
                title: <Checkbox name="checkAll" checked={this.state.allChecked} onClick={(event) => this.handleItemClicked(event, -1)}></Checkbox>,
                align: 'right' as 'right',
                render: (id: any, record: any) => <Checkbox onClick={(event) => this.handleItemClicked(event, record.id)} checked={record.isChecked}></Checkbox>
            }
        ];

        const temp_data = [
            {index:1, violation_type:"Loại vi phạm", report_account:"Tài khoản báo cáo"},
            {index:2, violation_type:"Loại vi phạm", report_account:"Tài khoản báo cáo"},
            {index:3, violation_type:"Loại vi phạm", report_account:"Tài khoản báo cáo"},
            {index:4, violation_type:"Loại vi phạm", report_account:"Tài khoản báo cáo"},
            {index:5, violation_type:"Loại vi phạm", report_account:"Tài khoản báo cáo"},
            {index:6, violation_type:"Loại vi phạm", report_account:"Tài khoản báo cáo"},
        ];

        const itemPaginationRender=(current: number, type: any, originalElement: React.ReactElement<HTMLElement>)=>{
            if (type === 'prev') {
                return <a className="table-prev">«</a>;
            } if (type === 'next') {
                return <a className="table-next">»</a>;
            }
            return originalElement;
        }
        const renderTotal = (total: number, range: [number, number]) => {
            return `Dòng ${range[0]} - ${range[1]} trên tổng số ${total} dòng`;
        }

        return (
            <div style={{ margin: "auto", marginTop: "40px", width: "90%"}}>
                <section style={{fontSize: "20pt"}}>
                    <h1>Quản lý tin tuyển dụng</h1>
                </section>

                <section className="filter-bar">
                    <Form layout={"vertical"}>
                        <Row style={{display: "flex"}}>
                            <Col span={4}>
                                <Form.Item label="Mã số tin tuyển dụng" style={{fontWeight: "bold"}}>
                                    <Input className="filter-input" style={{width: "95%"}}/>
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item label="Vị trí công việc" style={{fontWeight: "bold"}}>
                                    <Select key="filter-name" className="filter-input" defaultValue="Tất cả" style={{width: "95%"}} onChange={(value: any, event: any) => {this.handleOnChangeFilterBar(value, event, "filter-name")}}>
                                        <Option value="Tất cả">Tất cả</Option>
                                        <Option value="UI/UX">UI/UX</Option>
                                        <Option value="Back End">Back End</Option>
                                        <Option value="Front End">Front End</Option>
                                        <Option value="Full Stack">Full Stack</Option>
                                    </Select>
                                    {/* <Input className="filter-input" placeholder="input placeholder 2" style={{width: "95%"}}/> */}
                                </Form.Item>
                            </Col>
                            <Col span={5}>
                                <Form.Item label="Trạng thái tin tuyển dụng" style={{fontWeight: "bold"}}>
                                    <Select key="filter-state" className="filter-input" defaultValue="Tất cả" style={{width: "95%"}} onChange={(value: any, event: any) => {this.handleOnChangeFilterBar(value, event, "filter-state")}}>
                                        <Option value="Tất cả">Tất cả</Option>
                                        <Option value="Đang tuyển">Đang tuyển</Option>
                                        <Option value="Đã tuyển">Đã tuyển</Option>
                                    </Select>
                                    {/* <Input className="filter-input" placeholder="input placeholder 3" style={{width: "95%"}}/> */}
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item label="Độ cấp thiết" style={{fontWeight: "bold"}}>
                                    <Select key="filter-urgent-level" className="filter-input" defaultValue="Tất cả" style={{width: "95%"}} onChange={(value: any, event: any) => {this.handleOnChangeFilterBar(value, event, "filter-urgentLevel")}}>
                                        <Option value="Tất cả">Tất cả</Option>
                                        <Option value="Cấp thiết">Cấp thiết</Option>
                                        <Option value="Không cấp thiết">Không cấp thiết</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item label="Sắp xếp theo" style={{fontWeight: "bold"}} className="align-left">
                                    <Select key="filter-order" className="filter-input" defaultValue="" style={{width: "95%"}}>
                                        <Option value="Mã số tin tuyển dụng">Mã số tin tuyển dụng</Option>
                                        <Option value="Vị trí công việc">Vị trí công việc</Option>
                                        <Option value="Trạng thái tin tuyển dụng">Trạng thái tin tuyển dụng</Option>
                                        <Option value="Độ cấp thiết">Độ cấp thiết</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Form.Item style={{right: "0", bottom: "0", position: "absolute"}}>
                                <Button type="primary" className="filter-button blue-background-color" onClick={() => this.handleClickedFilterButton()}>Lọc</Button>
                            </Form.Item>
                                
                        </Row>
                    </Form>
                </section>

                <section className="recruitment-post-table"> 
                    <Table
                        rowKey={(record, index) => record.id }
                        size={'default'}
                        bordered={false}
                        columns={columns}
                        dataSource={
                            this.state.listItem.filter(item => item.enabled)
                        }
                        rowClassName={(record, index) => 'custom-table-line' }
                        onRowClick={(record: any, index: number, event: Event) => this.handleRowClicked(record, index, event)}
                        pagination={
                            {
                                defaultPageSize: 10,
                                itemRender:(current, type, originalElement) => itemPaginationRender(current, type, originalElement),
                                showTotal:(total, range) => renderTotal(total, range),
                            }
                        }
                    >
                    </Table>
                </section>

                <section className="recruitment-post-actions" style={{marginTop: "10px", display: "block", textAlign: "right"}}>
                    <Button type="danger" style={{marginRight: "15px"}} disabled={!this.state.isAnyItemClicked} onClick={() => this.handleClickedForbiddenButton()}>Cấm tin tuyển dụng</Button>
                    <Button type="primary" className="blue-background-color" disabled={!this.state.isAnyItemClicked} onClick={() => this.handleClickedReportDetailsButton()}>Chi tiết báo cáo</Button>
                </section>

                <Modal
                    visible={this.state.openViolateReports}
                    width={600}
                    footer={null}
                    destroyOnClose={true}
                    onCancel={() => { this.setState({ openViolateReports: false }) }}
                >
                    <h1>Các báo cáo vi phạm</h1>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Mã số tin tuyển dụng"></Form.Item>
                        </Col>
                        <Col span={16}>
                            <Input className="filter-input" value="1" disabled={true}/>
                        </Col>
                    </Row>

                    <Table
                        // rowKey={(record, index) => record.id }
                        size={'default'}
                        bordered={false}
                        columns={
                            [
                                { 
                                    title: ('STT'),
                                    dataIndex: 'index',
                                    align: 'center' as 'center',
                                },
                                { 
                                    title: ('Loại vi phạm'),
                                    dataIndex: 'violation_type',
                                    align: 'center' as 'center',
                                },
                                { 
                                    title: ('Tài khoản báo cáo'),
                                    dataIndex: 'report_account',
                                    align: 'center' as 'center',
                                },
                                {
                                    align: 'center' as 'center',
                                    render: () => <a onClick={() => {this.setState({openReportDetails: true})}} className="hyperlink-details">Xem chi tiết</a>
                                }
                            ]
                        }
                        dataSource={temp_data}
                        rowClassName={(record, index) => 'custom-table-line' }
                        pagination={
                            {
                                defaultPageSize: 5,
                                itemRender:(current, type, originalElement) => itemPaginationRender(current, type, originalElement),
                                showTotal:(total, range) => renderTotal(total, range),
                            }
                        }
                    >
                    </Table>


                </Modal>

                <Modal
                    visible={this.state.openReportDetails}
                    width={600}
                    footer={[<Button key="exit" style={{background: "#f5f5f5", color: "#333333", fontWeight: "bold", width: "100px"}} onClick={() => {this.setState({ openReportDetails: false })}}>Thoát</Button>]}
                    destroyOnClose={true}
                    onCancel={() => { this.setState({ openReportDetails: false }) }}
                >
                    <h1>Chi tiết báo cáo</h1>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Tài khoản báo cáo"></Form.Item>
                        </Col>
                        <Col span={16}>
                            <Input className="filter-input" value="1"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item label="Loại vi phạm"></Form.Item>
                        </Col>
                        <Col span={16}>
                            <Select placeholder="Loại vi phạm" key="filter-urgent-level" className="filter-input" style={{width: "100%"}}>
                            </Select>
                        </Col>
                    </Row>

                    <Row>
                        <span>Chi tiết vi phạm</span>
                    </Row>
                    <Row>
                        <TextArea style={{border: "1px solid black", marginTop: "10px"}} value="A king keeps his throne"></TextArea>
                    </Row>
                </Modal>
            </div >
        );


    }

}