import React from 'react'

import '../../styles.less'
import './CompanyInfoList.less'
import { inject, observer } from 'mobx-react';

//import CustomModal from 'app/shared/components/CustomModal/CustomModal'
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import recruitmentPostStore from "../../../group9/stores/recruitmentPostStore"
import CompanyInfoStore from 'app/groups/group1/stores/CompanyInfoStore';
//import { CreateCompanyInfoInput } from '../../services/dto/CompanyInfoDTO/createOrUpdateCompanyInfoInput';
// import {GetCompanyInfoByIdOutput} from '../../services/dto/CompanyInfoDTO/getCompanyInfoByIdOutPut'
// import { UpdateCompanyInfoInput } from '../../services/dto/CompanyInfoDTO/createOrUpdateCompanyInfoInput';
import { EntityDto } from 'shared/services/dto/entityDto';
//import { Card } from '@material-ui/core';
//import Name_Slogan from 'app/groups/group1/components/CompanyInfo/Name_Slogan'
import fbPicture from 'assets/images/Facebook.png';
import TwPicture from 'assets/images/Twitter.png';
import LkPicture from 'assets/images/LinkedIn.png';
import { Button, Rate, Avatar,Tag} from "antd";
import UpdateCompany from '../../components/CompanyInfo/UpdateCompany';

import pic from 'assets/images/avatarJobSeeker.jpg';

export interface ICompanyInfoProps {
    CompanyInfoStore: CompanyInfoStore;
    recruitmentPostStore: recruitmentPostStore;
}

export interface ICompanyInfoState {
    modalVisible: boolean;
    selectedID: number;
    companyID: number;
    isAnyItemClicked: boolean;
    isAddCompanyInfoPopupOpen: boolean;
    CompanyInfoName: string,
    CompanyInfoDesc: string,
    isEditCompanyInfoPopupOpen: boolean,
    isEditCompanyCoverImagePopupOpen: boolean,
    isVerifyDeletePopupOpen: boolean
}


@inject(Stores.CompanyInfoStore)
@inject(Stores.recruitmentPostStore)
@observer
export default class CompanyInfoList extends AppComponentBase<ICompanyInfoProps, ICompanyInfoState> {

    formRef: any;


    constructor(props: any) {
        super(props);
        this.state =
        {
            modalVisible: false,
            selectedID: 1,
            isAnyItemClicked: false,
            isAddCompanyInfoPopupOpen: false,
            CompanyInfoName: "",
            CompanyInfoDesc: "",
            isEditCompanyInfoPopupOpen: false,
            isEditCompanyCoverImagePopupOpen: false,
            isVerifyDeletePopupOpen: false,
            companyID: 1,
        }

    }

    async componentDidMount() {
        this.getRecruiterInfoByID();
        await this.getAllRecruitment();
    }

    Modal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    };
    getCompanyInfoById = (comID: number) => {
        let dto: EntityDto =
        {
            id: comID,
        }
        return this.props.CompanyInfoStore.getCompanyInfoByID(dto);
    }
    async getRecruiterInfoByID() {
        let dto: EntityDto =
        {
            id: this.state.selectedID,
        }
        this.props.CompanyInfoStore.getRecruiterInfoByID(dto);
    }
    async getAllRecruitment() {
      await  this.props.recruitmentPostStore.getAll();
    }
    handleDelete = () => {

    }

    closeAllSelectedItem = () => {

    }

    handleEdit = () => {

    }

    handleEditCoverImage = () => {

    }

    handleItemClicked = (id: number) => {

    }

    async UpdateModalOpen(entityDto: EntityDto) {
        await this.props.CompanyInfoStore.getCompanyInfoByID(entityDto);
        this.setState({ selectedID: entityDto.id });
        this.Modal();
        if (entityDto.id !== 0) {
            this.formRef.props.form.setFieldsValue({
              ...this.props.CompanyInfoStore.CompanyInfo,
            });
          } else {
            this.formRef.props.form.resetFields();
          }
        }

    handleCreate = () => {
        const form = this.formRef.props.form;
    
        form.validateFields(async (err: any, values: any) => {
          if (err) {
            return;
          } else {
              await this.props.CompanyInfoStore.update({ id: this.state.selectedID, ...values });
            }
    
        //await this.getAll();
          this.setState({ modalVisible: false });
          form.resetFields();
        });
      };

    saveFormRef = (formRef: any) => {
        this.formRef = formRef;
    };

    
    public render() {
        
        const { CompanyRecruiter } = this.props.CompanyInfoStore;
        if (CompanyRecruiter === undefined) return (
            <div>
                <h1 className='heading1'>KHONG CO DU LIEU VE NHA TUYEN DUNG</h1>
            </div >
        );
        this.getCompanyInfoById(CompanyRecruiter.idCompany);
        const { CompanyInfo } = this.props.CompanyInfoStore;

        if (CompanyInfo === undefined) return (
            <div>
                <h1 className='heading1'>KHONG CO DU LIEU VE CONG TY</h1>
            </div >
        );
        let item_company_info = CompanyInfo;
        const {recruitmentPosts} =this.props.recruitmentPostStore;
        
        
        return (
            <div style={{ margin: "auto", marginTop: "20px", width: "60%", minWidth:900 }}>
                {/* info   */}
                 <div >
                    <div className="blueHeader" style={{ justifyContent:"flex-end", display:"flex"}}>
                        <Button className="buttonEditHeader" style={{marginRight: 0, height:40, width:200}} >Chỉnh sửa ảnh bìa</Button>
                        <Button className="buttonEditHeader" style={{marginRight: 50, height:40, width:200}}  onClick={() => this.UpdateModalOpen({ id: CompanyInfo.id })}>Chỉnh sửa thông tin</Button>
                        <UpdateCompany
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.modalVisible}
                            onCancel={() =>
                                this.setState({
                                modalVisible: false,
                                })
                            }
                            onCreate={this.handleCreate}
                        />
                    </div>
                    
                    <div className="whiteHeader">
                        <div className="avatarCompany">
                            <img className="imageHeader" src={pic} alt="No"></img>
                        </div>
                        <div>
                            <div className="banner">
                                <h6 style={{fontSize:14,fontFamily: "Open Sans"}}>
                                <img height="20" width="20" src="https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png" />
                                    <i className="fas fa-map-marker-alt"></i>
                                    {item_company_info.address}
                                </h6>
                                <h2 style={{fontSize:20,minWidth:'300px',fontFamily: "Open Sans Condensed"}}>Công ty {item_company_info.name}</h2>
                                <div >
                                    <h6  style={{fontSize:14,fontFamily: "Open Sans"}}>A king keep his throne
                                    <br/>A king keep his throne
                                    <br/>A king keep his throne
                                    </h6>
                                </div>
                            </div>
                        </div>
                      
                        <img onClick={()=>({})} style={{marginLeft:200,marginTop:48}} height="20" width="20" src="https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Compose-2-512.png" />
     
                        <div className="row-padding info-form" style={{marginTop:30, marginLeft:50}}>
                            <div className="column-info-form1">
                                <div className="column">
                                    <h2>Giới thiệu về doanh nghiệp</h2>
                                    <div style={{fontSize:16 ,fontFamily: "Open Sans"}}>
                                    <p>Địa chỉ:   {item_company_info.address}</p>
                                    <p>Email: {item_company_info.email}</p>
                                    <p>Trang web doanh nghiệp: <b><u>{item_company_info.website}</u></b></p>
                                    <p>Lĩnh vực hoạt động: {item_company_info.expertise}</p>
                                    <p>Quy mô nhân sự: {item_company_info.headcountLimit} người</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column-info-form2">
                                <div className="column">
                                    <div className="rating">
                                    <h6 style={{marginTop:32, marginBottom:0,fontSize:12, color:"GrayText"}}>10 lượt đánh giá</h6>
                                        <h3 style={{marginTop:16 ,marginBottom:0,fontSize:25, fontWeight:"bold"}}>4.5</h3>
                                        <div style={{marginTop:6,marginBottom:0}}>
                                            <Rate disabled={true} count={5} allowHalf={true} defaultValue={4.5}></Rate>
                                        </div>
                                        <Button className="buttonCenter" type="primary">Xem đánh giá</Button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recruitment */}
                <div className="section">
                    <h2 style={{height:40}}></h2>
                    <div className="flex-container" style={{justifyContent:"space-between"}}>
                        <h2  style={{marginLeft :30,fontWeight:900, fontFamily:"Open Sans Condensed", fontSize:25}} ><b>Danh sách tin tuyển dụng</b></h2>
                        <div>
                            <Button type="primary" style={{minWidth:"100px",marginRight:30}}>Quản lý</Button>
                            <Button type="primary" style={{minWidth:"100px",marginRight:30}}>Tạo tin mới</Button>
                         </div>
                    </div>
                    <SectionRecruitment
                               name="a" 
                               finishDate="1"
                               province={item_company_info.address}
                               salary="10"
                               wayOfWork="full"
                               state="Đang cần gấp"
                               expertise1="game"
                               expertise2="game"
                               expertise3="game"
                               expertise4="game"
                    ></SectionRecruitment>
                    {recruitmentPosts.items.map((item) => (<SectionRecruitment
                                name={item.name} 
                                finishDate= "1-1-2020"//{recruitmentPosts.items[0].finishDate} 
                                province={item_company_info.address}
                                salary={item.salaryRange} 
                                wayOfWork={item.wayOfWork} 
                                state="Chưa cần gấp"//{recruitmentPosts.items[0].state} 
                                expertise1="game"//{recruitmentPosts.items[0].expertise[0].name} 
                                expertise2="gì đó"//{recruitmentPosts.items[0].expertise[1].name} 
                                expertise3="gì đó nữa"//{recruitmentPosts.items[0].expertise[2].name} 
                                expertise4="gì đó nữa nha"//{recruitmentPosts.items[0].expertise[3].name} 
                    ></SectionRecruitment>))}
                    <div style={{justifyContent:"center", display:'flex'}}>
                        <Button className="btnXemTatCa">Xem tất cả</Button>
                    </div>
                    <h2 style={{height:40}}></h2>
                </div>
                {/* infoshare */}
                <SectionInfoShare name={CompanyRecruiter.name}
                                email={CompanyRecruiter.email}
                                phoneNumber={CompanyRecruiter.phoneNumber}
                                jobID={CompanyRecruiter.idCurrentPosition}
                ></SectionInfoShare>
                    
            </div>
        );


    }

}
const SectionRecruitment= (props:any) => {
    return(
    
                        <div style={{margin :30, alignItems:"center",justifyContent:"center"}}  className="row-margin-frames">
                            <div className="study-area" style={{borderStyle:"none",backgroundColor:"whitesmoke"}}>
                            <h3 style={{fontSize:20}}><b>{props.name}</b></h3>    
                            <div className="flex-container" style={{justifyContent:"space-between"}}>
                                <h6 style={{fontSize:16,fontFamily:"Open Sans"}}>Ngày kết thúc: <b>{props.finishDate}</b></h6>
                                <h6 style={{fontSize:16,fontFamily:"Open Sans"}}>Mức lương: <b>{props.salary}</b></h6>
                                <h6 style={{fontSize:16,fontFamily:"Open Sans"}}>Tỉnh thành: <b>{props.province}</b></h6>
                                <h6 style={{fontSize:16,fontFamily:"Open Sans"}}>Hình thức: <b>{props.wayOfWork}</b></h6>
                                <div className="flex-container" style={{
                                             minWidth:'150px',
                                             height:'30px',
                                             justifyContent:"center",paddingTop:'8px',
                                             backgroundColor: props.state=="Đang cần gấp"? "#F83D34": props.state==null?'transparent': "#8B8B8B",
                                             borderRadius:70/3 ,                              
                                }}>
                                    <h6 style={{color:"white",fontSize:16,fontFamily:"Open Sans,san-sift",}}>
                                <b>{props.state}</b> </h6> </div>
                            </div>
                            <div className="flex-container" style={{justifyContent:"left"}}>
                                
                                <Tag style={{justifyContent:"center",minWidth:"50px",fontSize:14,fontFamily:"Open Sans",
                                             backgroundColor:props.expertise1==null?'transparent':"white",
                                             borderRadius:'5px',
                                             marginRight:"5px",
                                             padding:'5px'
                                }}><b>{props.expertise1}</b></Tag>
                               <Tag style={{justifyContent:"center",minWidth:"50px",fontSize:14,fontFamily:"Open Sans",
                                             backgroundColor:props.expertise1==null?'transparent':"white",
                                             borderRadius:'5px',
                                             marginRight:"5px",
                                             padding:'5px'
                                }}><b>{props.expertise2}</b></Tag>
                                <Tag style={{justifyContent:"center",minWidth:"50px",fontSize:14,fontFamily:"Open Sans",
                                             backgroundColor:props.expertise1==null?'transparent':"white",
                                             borderRadius:'5px',
                                             marginRight:"5px",
                                             padding:'5px'
                                }}><b>{props.expertise3}</b></Tag>
                                <Tag style={{justifyContent:"center",minWidth:"50px",fontSize:14,fontFamily:"Open Sans",
                                             backgroundColor:props.expertise1==null?'transparent':"white",
                                             borderRadius:'5px',
                                             marginRight:"5px",
                                             padding:'5px'
                                }}><b>{props.expertise4}</b></Tag>
                            </div>               
                            </div>
                        </div>

        
    );
}
const SectionInfoShare= (props:any) =>  {
    return(
        <div className="section" >
             <footer className="row share-info row-padding">
               
                  <div className="flex-container"> 
                    <div className="Recruiter">
                        <h2 style={{fontSize:20,fontFamily: "Open Sans Condensed"}}> Liên hệ người tuyển dụng</h2>
                        <div style={{fontSize:16,fontFamily: "Open Sans"}}>
                        <p > Mr. <b>{props.name}</b></p>
                        <p > Số điện thoại: {props.phoneNumber}</p>
                        <p> Email: {props.email}</p>
                        <p> Vị trí công việc: {props.jobID} </p>
                        </div>
                    </div>
                    
                    <div className="share">
                        <h6  style={{margin :30}} >Chia sẻ trang</h6>
                          <Button shape="circle" style={{ outline: 'none'}}>
                             <Avatar style={{ height: 40, width: 40 }} shape="circle" alt={'profile'} src={fbPicture} />
                          </Button>
                          <Button shape="circle" style={ {marginLeft: 10, outline: 'none'} }>
                             <Avatar style={{ height: 40, width: 40 }} shape="circle" alt={'profile'} src={LkPicture} />
                          </Button>
                          <Button style={ {marginLeft: 10, outline: 'none'} } shape="circle" >
                             <Avatar style={{ height: 40, width: 40 }} shape="circle" alt={'profile'} src={TwPicture} />
                          </Button>       
                    </div>
                    </div>
               
             </footer>
        </div>
    );
}  
