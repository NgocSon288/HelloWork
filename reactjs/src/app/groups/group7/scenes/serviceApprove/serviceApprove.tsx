import '../../styles.css'
import './serviceApprove.css';
import ApproveServiceStore from '../../stores/ApproveServiceStore'
import React, { } from 'react';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import { Table } from 'antd';
import { inject } from 'mobx-react';
import Stores from 'app/shared/stores/storeIdentifier';
import { ServiceApprove } from '../../services/dto/qldvDTO/qlsvDTO';
import { message } from 'antd';

//import { PaginationConfig } from 'antd/lib/table';
//const { Option } = Select;

export interface ServiceApproveProp {
    approveServiceStore: ApproveServiceStore;
}

export interface ServiceApproveState {
    selectedRows: ServiceApprove[],
    data: any[],
    slName: string,
    slTT: number,
    pagesize: number,
    currentPage: number,
    option1: string,
    option2: string,
    select1: any[],
    select2: any[]
}

@inject(Stores.approveServiceStore)
class serviceApprove extends AppComponentBase<ServiceApproveProp, ServiceApproveState> {
    constructor(props: any) {
        super(props);

        this.state = {
            selectedRows: [],
            data: [],
            slName: '',
            slTT: 0,
            pagesize: 5,
            currentPage: 1,
            option1: 'Tất cả',
            option2: 'Tất cả',
            select1: ['Tất cả'],
            select2: ['Tất cả']
        };
    }
    dichvulist: any;
    async componentDidMount() {
        await this.getAll();

    }
    async getAll() {
        await this.props.approveServiceStore.getAllService();
        let l: any[] = ['Tất cả'];
        let m: any[] = ['Tất cả'];;
        let x = this.props.approveServiceStore.serviceListApprove.items.map((i, index) => {
            l.push(i.name);
            m.push(i.status)
            let tmp = new Date(i.registrationDate);
            i.registrationDate = tmp.getDate() + '/' + tmp.getMonth() + '/' + tmp.getFullYear();
            return { stt: index + 1, ...i };
        })
        this.dichvulist = x;
        this.setState({ data: x });
        let unique = [...new Set(l)];
        let unique2 = [...new Set(m)];
        this.setState({ select1: unique });
        this.setState({ select2: unique2 });
    }
    onSelectedRowKeysChange = (selectedRows: any) => {
        this.setState({ selectedRows });
    }
    onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
        this.setState({ selectedRows })
    };
    onHandleChange1 = (event: any) => {
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ option1: value })
    }
    onHandleChange2 = (event: any) => {
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ option2: value })
    }
    fillter = () => {
        var dataFilter = this.dichvulist;
        if (this.state.option1 === 'Tất cả') {
            dataFilter = this.dichvulist;
        }
        else {
            let tmp = [];
            for (let index = 0; index < dataFilter.length; index++) {
                if (dataFilter[index].name === this.state.option1) {
                    tmp.push(dataFilter[index])
                }
            }
            dataFilter = tmp;
        }
        if (this.state.option2 !== 'Tất cả') {
            let tmp = [];
            for (let index = 0; index < dataFilter.length; index++) {
                //const element = array[index];
                if (dataFilter[index].status === this.state.option2) {
                    tmp.push(dataFilter[index])
                }
            }
            dataFilter = tmp;
        }
        this.setState({ data: dataFilter })
    }
    Duyet = async () => {
        console.log(this.state.selectedRows);
        await this.props.approveServiceStore.approveService(this.state.selectedRows);
        if (this.props.approveServiceStore.serviceApprove) {
            message.success('Duyệt thành công');
        }
        await this.getAll();

    }
    render() {
        const { selectedRows } = this.state;
        const rowSelection = {
            selectedRows,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRows.length > 0;
        return (
            <div className='mainDV' >
                <div className="service__header heading-4" >
                    Quản lý dịch vụ
                    </div>

                {/* <div className="title-filter">
                    <div className="title-left">Tên dịch vụ</div>
                    <div className="title-right">Trạng thái dịch</div>
                </div> */}
                <div className="headerDV">

                    <div className='selectDV__Left' >
                        <div className="title-left">Tên dịch vụ</div>
                        <select className="select-left" defaultValue={this.state.option1} onChange={this.onHandleChange1} >

                            {this.state.select1.map((x, index) => {
                                return (
                                    <option value={x} key={index}>{x}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                    <div className='selectDV__Right'>
                        <div className="title-right">Trạng thái dịch</div>
                        <select className="select-right" defaultValue={this.state.option2} onChange={this.onHandleChange2} >

                            {/* <option value={0} >Tất cả</option>
                            <option value={1}>Đang sử dụng </option>
                            <option value={2}>Đang chờ thanh toán </option> */}
                            {this.state.select2.map((x, index) => {
                                return (
                                    <option value={x} key={index}>{x}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button type="button" className="g7-btn g7-btn-primary" onClick={this.fillter}>Lọc</button>
                </div>
                {/* tabel */}
                <Table className="table"
                    pagination={{
                        position: 'bottom', total: this.state.data.length, pageSize: this.state.pagesize,

                        onShowSizeChange: (current, size) => {
                            this.setState({ pagesize: size })
                        }
                    }}
                    rowKey='stt'
                    rowSelection={rowSelection}
                    dataSource={this.state.data}
                    columns={this.columns}
                />
                {/* end table */}

                {/* btn */}
                <div className="table__footer">
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRows.length} items` : ''}
                    </span>
                    <div className="btn-approve">
                        <button type="button" className="g7-btn g7-btn-primary" onClick={this.Duyet}>Duyệt</button>
                    </div>
                </div>
                {/* end btn */}
            </div>
        );
    }
    columns: any = [
        {
            title: 'STT',
            dataIndex: "stt",
            key: "stt",
            sorter: (a: any, b: any) => a.id - b.id,
            defaultSortOrder: 'descend'
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'name',
            key: 'name',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.status.length - b.status.length,
        },
        {
            title: 'Trạng thái dịch vụ',
            dataIndex: 'status',
            key: 'status',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.status.length - b.status.length,
        },
        {
            title: 'Nhà tuyển dụng',
            dataIndex: 'employerName',
            key: 'employerName',
            defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => a.status.length - b.status.length,
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'registrationDate',
            key: 'registrationDate',
        },
        {
            title: 'Đơn vị tính',
            dataIndex: 'unit',
            key: 'unit',
            sorter: (a: any, b: any) => a.unit.length - b.unit.length,
            defaultSortOrder: 'descend'
        },
        {
            title: 'Số lượng',
            dataIndex: 'remainUseTimes',
            key: 'remainUseTimes',
            sorter: (a: any, b: any) => a.remainUseTimes - b.remainUseTimes,
            defaultSortOrder: 'descend'
        },
    ];


}

export default serviceApprove;

