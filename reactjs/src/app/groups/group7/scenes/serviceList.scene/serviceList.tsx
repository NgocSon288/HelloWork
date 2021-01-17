import React from 'react';
import AppComponentBase from 'app/shared/components/AppComponentBase';

// css
import '../../styles.css';
import './serviceList.css';

// other
import { inject, observer } from 'mobx-react';
import ModalTutorial from '../../components/modal-tutorial.component/modal-tutorial.component';
import ItemServiceRegisterList from '../../components/item-service-register.component/item-service-register.component';
import Loading from 'app/shared/components/Loading';
import ServiceRegisterStore from '../../stores/serviceRegister.store';
import SessionStore from 'shared/stores/sessionStore';
import Stores from 'app/shared/stores/storeIdentifier';
import ItemServiceList from '../../components/item-service.component/item-service.component';
import ServiceStore from '../../stores/service.store';
import { CreateRegisterService } from '../../services/dto/serviceDTO/clientService.service';

// ant
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { Modal } from 'antd';
const { confirm } = Modal;

export enum Tab {
  Manager = 0,
  Register = 1,
}

export interface IServiceListProps {
  serviceRegisterStore: ServiceRegisterStore;
  sessionStore: SessionStore;
  serviceStore: ServiceStore;
}

export interface IServiceState {
  tab: Tab;
  isShowTutorial: boolean;
}

@inject(Stores.SessionStore, Stores.serviceRegisterStore, Stores.serviceStore)
@observer
export default class ServiceList extends AppComponentBase<IServiceListProps, IServiceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tab: Tab.Register,
      isShowTutorial: false,
    };
  }

  async componentDidMount() {
    await this.getAllServiceRegister();
    await this.getCurrentLoginInformations();
    await this.getAllService();
  }

  async getAllServiceRegister() {
    await this.props.serviceRegisterStore.getAll();
  }

  async getCurrentLoginInformations() {
    await this.props.sessionStore.getCurrentLoginInformations();
  }

  async getAllService() {
    const { currentLogin } = this.props.sessionStore;
    await this.props.serviceStore.getAll(currentLogin.user.id);
  }

  // method navigate
  activeManager = () => {
    this.setState({ tab: Tab.Manager });
  };

  activeRegister = () => {
    this.setState({ tab: Tab.Register });
  };

  // method modal
  hideModal = () => {
    this.setState({
      isShowTutorial: false,
    });
  };

  showModal = () => {
    this.setState({ isShowTutorial: true });
  };

  // render Tab manager
  renderTabManager = (listService: any) => {
    return listService.map((service: any) => {
      return (
        <ItemServiceList
          key={service.id}
          id={service.id}
          name={service.name}
          description={service.description}
          registrationDate={service.registrationDate}
          unit={service.unit}
          remainUseTimes={service.remainUseTimes}
          status={service.status}
          isExtend={service.extend}
          deny={(id: number) => {
            this.deny(id);
          }}
          extend={(id: number, servicename: string) => {
            this.extend(id, servicename);
          }}
          cancelExtend={(id: number) => {
            this.cancelExtend(id);
          }}
        />
      );
    });
  };

  renderTabRegister = (listRegister: any) => {
    return listRegister.map((service: any, index: number) => {
      return (
        <ItemServiceRegisterList
          key={index}
          name={service.name}
          description={service.description}
          services={service.services}
          unit={service.unit}
          register={(id: number, serviceTypeName: string) => this.register(id, serviceTypeName)}
        />
      );
    });
  };

  // method Tab register
  register = async (id: number, serviceTypeName: string) => {
    const { services } = this.props.serviceStore;
    let isExisted = services?.items.map((x) => x.name).indexOf(serviceTypeName);

    if (isExisted !== -1) {
      Modal.error({
        title: 'Dịch vụ đã được đăng ký trước đó',
        content: 'Nếu muốn gia hạn dịch vụ, quý khách vui lòng chọn "Gia hạn" tại trang "Quản lý dịch vụ"',
      });
    } else if (id !== -1) {
      // create data
      const { currentLogin } = this.props.sessionStore;
      let data: CreateRegisterService = {
        serviceId: id,
        employerId: currentLogin.user.id,
      };
      confirm({
        title: 'Xác nhận đăng ký?',
        icon: <ExclamationCircleOutlined />,
        content: '',
        onOk: () => {
          this.onOk(data);
        },
      });
      // message
    } else message.warning('Vui lòng chọn gói dịch vụ trước khi bấm đăng ký.');
  };

  async onOk(data: any) {
    await this.props.serviceStore.register(data);
    await this.getAllService();
    message.success('Đăng ký thành công');
  }
  // method Tab Service
  deny = (id: number) => {
    confirm({
      title: 'Bạn có chắc muốn hủy dịch vụ này?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk: () => {
        this.denyService(id);
      },
    });
  };

  denyService = async (id: number) => {
    await this.props.serviceStore.deny(id);
    const { resultDeny } = this.props.serviceStore;
    if (resultDeny == true) {
      message.success('Đã hủy dịch vụ');
      this.getAllService();
    } else {
      message.error('Hủy dịch vụ thất bại');
    }
  };

  extend = async (id: number, servicename: string) => {
    const { currentLogin } = this.props.sessionStore;
    const bodyMail: { email: string; username: string; servicename: string } = {
      email: currentLogin.user.emailAddress,
      username: currentLogin.user.name,
      servicename,
    };
    await this.props.serviceStore.extend(id, bodyMail);
    message.success('Gia hạn dịch vụ thành công. Vui lòng kiểm tra mail');
    await this.getAllService();
  };

  cancelExtend = async (id: number) => {
    await this.props.serviceStore.cancelExtend(id);
    message.success('Hủy hạn dịch vụ thành công.');
    this.getAllService();
  };


  public render() {
    const { servicesRegister } = this.props.serviceRegisterStore;
    const { services } = this.props.serviceStore;

    if (!servicesRegister) console.log('servicesRegister is undefined');
    if (!servicesRegister || !services) return <Loading />;

    let listRegister = servicesRegister?.items;
    let listService = services?.items;

    // render
    return (
      <div>
        {/* Modal tutorial  */}

        <ModalTutorial isShow={this.state.isShowTutorial} hideModal={this.hideModal}>
          <div className="mb-2">
            <b>Thời gian nộp:</b> Trong vòng 20 ngày kể từ ngày đăng kí dịch vụ
          </div>
          <div>
            <b>Phương thức thanh toán:</b> Thông qua tài khoản ngân hàng
          </div>
          <div className="ml-5">Tên tài khoản: Công ty cổ phần Web ABC</div>
          <div className="ml-5">Số tài khoản: 12345689</div>
          <div className="ml-5 mb-2">Tại: Ngân hàng ABC</div>
          <div>
            <b className="text-danger">*Lưu ý: </b>
          </div>
          <div>
            <i className="ml-5">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
              for use in a type specimen book.
            </i>
          </div>
        </ModalTutorial>

        {/* service manager */}
        <div className="service">
          <div className="service__header heading-4">Dành cho doanh nghiệp</div>

          <div className="service__tabs">
            <ul className="tabs__items g7-ul">
              <li onClick={this.activeManager} className={'tabs__item' + (this.state.tab === Tab.Manager ? ' active' : '')}>
                Quản lý dịch vụ
              </li>
              <li onClick={this.activeRegister} className={'tabs__item' + (this.state.tab === Tab.Register ? ' active' : '')}>
                Đăng ký dịch vụ
              </li>
            </ul>
            <div>
              <button onClick={this.showModal} style={this.state.tab === Tab.Manager ? { display: 'none' } : {}} className="g7-btn g7-btn-primary">
                Hướng dẫn thanh toán
              </button>
            </div>
          </div>

          <div>{this.state.tab === Tab.Manager ? this.renderTabManager(listService) : this.renderTabRegister(listRegister)}</div>
        </div>
      </div>
    );
  }
}
