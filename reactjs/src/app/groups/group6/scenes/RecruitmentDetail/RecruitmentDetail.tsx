import '../../styles.less';
import './RecruitmentDetail.less';
import Stores from 'app/shared/stores/storeIdentifier';
import { inject, observer } from 'mobx-react';
import RecruitmentsStore from '../../stores/recruitmentsStore';
import ExpertisesStore from '../../stores/expertisesStore';
import { IRecruitmentsGet } from '../../models/recruitments';
import React from 'react';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import { Row, Col, Avatar, Tag, Button, Modal, Select, message, Icon } from 'antd';
import moment from 'moment';

export interface IRecruitmentsProps {
  // jobTypeStore: JobTypeStore;
  recruitmentsStore: RecruitmentsStore,
  expertisesStore: ExpertisesStore
}

export interface IRecruitmentsState {
  recruitment: IRecruitmentsGet,
}

@inject(Stores.recruitmentsStore)
@inject(Stores.expertisesStore)
@observer
export default class RecruitmentDetail extends AppComponentBase<IRecruitmentsProps, IRecruitmentsState> {
  constructor(props: any) {
    super(props);
    this.state = {
        recruitment: {
            id: '30',
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
            state: 'nhap',
            creationTime: '2020-11-20T00:00:00',
            creatorUserId: 0
        }
    }
  }

  idRecruitment = '1';
  isEmployer = false;
  linkName = '';

  async componentDidMount() {
    const pathArray = window.location.pathname.split('/');
    this.linkName = pathArray[pathArray.length - 1];
    const pathLast = pathArray[pathArray.length - 1].split('-');
    this.idRecruitment = pathLast[pathLast.length - 1];
    await this.props.recruitmentsStore.getRecruitmentById(this.idRecruitment);

    this.setState({
        recruitment: this.props.recruitmentsStore.recruitment
    });
  }

  editRecruitment() {
    window.location.href = '/tin-tuyen-dung/cap-nhat/' + this.linkName;
  }

  daysRemaining (finishDate: string) {
    var eventdate = moment(finishDate);
    var todaysdate = moment();
    if (eventdate.diff(todaysdate, 'days') > 0) {
      return eventdate.diff(todaysdate, 'days');
    } else {
      return 0;
    }
  }

  getSalaryRange (value: string) {
    switch (value) {
      case 'thuongluong':
        return 'Thương lượng';
      case '<1m':
        return 'Dưới 1 triệu'
      case '1-5m':
        return '1 - 5 triệu'
      case '5-10m':
        return '5 - 10 triệu'
      case '10-20m':
        return '10 - 20 triệu'
      case '20-50m':
        return '20 - 50 triệu'
      case '50-100m':
        return '50 - 100 triệu'
      case '>100m':
        return 'Trên 100 triệu'
      default:
        return 'Thương lượng'
    }
  }

  createMarkup(html: string) {
    return {__html: html};
  }

  submitCV() {
    const listCV = [
      {id: 1, name: 'Tên CV ----------- 1'},
      {id: 2, name: 'Tên CV ----------- 2'},
      {id: 3, name: 'Tên CV ----------- 3'},
      {id: 4, name: 'Tên CV ----------- 4'},
    ]
    const { Option } = Select;
    const { confirm } = Modal;
    confirm({
      title: 'Vui lòng chọn CV',
      okText: 'Nộp CV',
      cancelText: 'Hủy bỏ',
      centered: true,
      content: (
        <Select placeholder='Chọn CV' style={{ width: '100%', marginTop: '8px' }}>
          {listCV.map((value) => {
            return <Option value={value.id}>{value.name}</Option>
          })}
        </Select>
      ),
      onOk() {},
      onCancel() {},
    });
  }

  saveRecruitment() {
    message.config({
      top: 100,
    })
    message.success('Lưu công việc thành công');
  }

  render() {
    return(
      <section>
        <div className="container-cover">
          <h1>HIHI</h1>
        </div>
        <div className="container-center">
          <Row type="flex" align="middle">
            <Col span={3}>
            <Avatar size={90} icon="user"/>
            </Col>
            <Col span={21}>
              <b style={{fontSize: '18px', color: '#518FF5'}}>VND Corporation</b>
              <div style={{fontSize: '32px', color: '#3D3D3D'}}><b>{this.props.recruitmentsStore.recruitment?.name}</b></div>
              <div style={{fontSize: '16px', color: '#3D3D3D'}}>Làm việc tại quận Thủ Đức</div>
            </Col>
          </Row>
          <Row style={{margin: '30px 0px 30px'}}>
            <Col span={11}>
              <div className="label">Ngày đăng tuyển</div>
              <div className="info"><b>{moment(this.props.recruitmentsStore.recruitment?.creationTime).format("DD/MM/YYYY")}</b></div>
              <div className="label">Ngày kết thúc</div>
              <div className="info">
                <b>{moment(this.props.recruitmentsStore.recruitment?.finishDate).format("DD/MM/YYYY")}</b>
                <i style={{paddingLeft: '6px'}}>(Còn {this.daysRemaining(this.props.recruitmentsStore.recruitment?.finishDate)} ngày nữa)</i>
              </div>
              <div className="label">Hình thức công việc</div>
              <div className="info qcont">{this.props.recruitmentsStore.recruitment?.wayOfWork}</div>
              <div className="label">Khoảng lương</div>
              <div className="info"><b>{this.getSalaryRange(this.props.recruitmentsStore.recruitment?.salaryRange)}</b></div>
              <div className="label">Mảng chuyên môn</div>
              <div>
              {this.props.recruitmentsStore.recruitment?.expertises.map((value) => {
                return <Tag color="#518FF5">{value.name}</Tag>
              })}
              </div>
            </Col>
            <Col span={13}>
              <div className="label">Mô tả công viêc *</div>
              <p className="info-16" dangerouslySetInnerHTML={this.createMarkup(this.props.recruitmentsStore.recruitment?.description)}></p>
              <div className="label">Yêu cầu công viêc</div>
              <p className="info-16" dangerouslySetInnerHTML={this.createMarkup(this.props.recruitmentsStore.recruitment?.requirement)}></p>
              <div className="label">Email liên hệ *</div>
              <p className="info">{this.props.recruitmentsStore.recruitment?.contactEmail}</p>
            </Col>
          </Row>
          <Row type="flex" justify="center" style={{display: this.isEmployer ? 'none' : 'flex'}}>
            <Button onClick={(e: any) => this.submitCV()} style={{margin: '0px 10px', width: '170px'}} type="primary"><b>Nộp CV</b></Button>
            <Button onClick={(e: any) => this.saveRecruitment()} style={{background: 'rgb(245, 245, 245)', margin: '0px 10px', width: '170px'}}><b>Lưu công việc</b></Button>
            <Button style={{background: 'rgb(245, 245, 245)', margin: '0px 10px', width: '170px'}}><b>Liên hệ với chúng tôi</b></Button>
          </Row>
          <Row type="flex" justify="center" style={{display: this.isEmployer ? 'flex' : 'none'}}>
            <Button onClick={(e: any) => this.editRecruitment()} style={{margin: '0px 10px', width: '180px'}} type="primary">
              <Icon type="edit" theme="filled" style={{marginRight: '10px'}}/>
              <b>Sửa tin tuyển dụng</b>
            </Button>
          </Row>
        </div>
      </section>
    )
  }
}