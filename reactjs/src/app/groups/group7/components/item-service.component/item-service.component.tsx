import React from 'react';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import './item-service.component.css';
import '../../styles.css';

export default class ItemServiceList extends AppComponentBase<any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const registrationDateCover = new Date(this.props.registrationDate);
    var month = registrationDateCover.getMonth() + 1;
    var str = registrationDateCover.getDate() + '/' + month +'/' + registrationDateCover.getFullYear();
    return (
      <div className="item-service">
        <div className="item__title heading-6">{this.props.name}</div>
        <div className=" item__des">
          <i>{this.props.description}</i>
        </div>
        <ul className="item__time g7-ul">
          <li>
            Ngày đăng ký: <b>{str}</b>
          </li>
          <li>
            Đơn vị tính: <b>{this.props.unit}</b>
          </li>
          <li>
            Trạng thái:{' '}
            <b>
              Còn {this.props.remainUseTimes} {this.props.unit}
            </b>
          </li>
        </ul>
        <ul className="item__action g7-ul">
          <li>
            <button className="g7-btn g7-btn-primary-ouline">{this.props.status}</button>
          </li>
          <li>
            <button className="g7-btn" onClick={() => this.deny()}>
              Hủy dịch vụ
            </button>
          </li>
          <li>
            <button className="g7-btn g7-btn-primary" onClick={() => this.extend()}>
              {this.props.isExtend ? 'Hủy gia hạn' : 'Gia hạn'}
            </button>
          </li>
        </ul>
      </div>
    );
  }

  deny() {
    this.props.deny(this.props.id);
  }

  extend() {
    if (this.props.isExtend) {
      this.props.cancelExtend(this.props.id);
    } else {
      this.props.extend(this.props.id, this.props.name);
    }
  }
}
