import React from 'react'
import '../../styles.less'
import './JobSeekerList.less'
import { inject, observer } from 'mobx-react';
//import CustomModal from '../../CustomModal/CustomModal'
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import JobSeekerStore from '../../stores/jobSeekerStore'
import ReviewStore from '../../stores/reviewStore';
import ExperienceStore, { IExperienceItem } from '../../stores/experienceStore';
import EducationStore, { IEducationItem } from '../../stores/educationStore'
import SkillStore, { ISkillItem } from '../../stores/skillStore';
import OrientationStore, {IOrientationItem} from '../../stores/orientationStore';
import AchievementStore, { IAchievementItem } from '../../stores/achievementStore';
import { EntityDto } from 'shared/services/dto/entityDto';
import fbPicture from 'assets/images/Facebook.png';
import TwPicture from 'assets/images/Twitter.png';
import LkPicture from 'assets/images/LinkedIn.png';
import IconBag from 'assets/images/IconBag.png';

// import pic from 'assets/images/avatarJobSeeker.jpg';
import picLocation from 'assets/images/LocationIcon.png';
import picPerson from 'assets/images/IconPerson.png';

//import FormItem from 'antd/lib/form/FormItem';
//thy code
import UpdateOrientation from '../../UpdateOrientation/UpdateOrientation';

import {Button, Avatar, Rate,Input } from "antd";
//import { EditFilled } from "@ant-design/icons";
import FormItem from 'antd/lib/form/FormItem';
import CustomModal from '../../Component/CustomModal/CustomModal'
import { UpdateJobSeekerInput } from '../../services/dto/jobSeekerDto/JobSeekerDto';
export interface IJobSeekerListProps {
    jobSeekerStore: JobSeekerStore;
    reviewStore : ReviewStore;
    educationStore : EducationStore;
    experienceStore : ExperienceStore;
    skillStore : SkillStore;
    orientationStore : OrientationStore;
    achievementStore : AchievementStore;
}

export interface IJobSeekerListState {
    Actor : string; // "Chủ tài khoản" , "Khách", "Nhà tuyển dụng"
    UpdatejobSeeker: UpdateJobSeekerInput,
    modalVisible: boolean;
    selectedID: number;
    isAnyItemClicked: boolean;
    isAddJobSeekerPopupOpen: boolean;
    jobSeekerName: string,
    jobSeekerDesc: string,
    isEditJobSeekerPopupOpen: boolean,
    isVerifyDeletePopupOpen: boolean,

    isUpdateOrientationPopupOpen: boolean

    isSeeAllEducation : boolean,
    isSeeAllExperience : boolean,
    isSeeAllSkill : boolean,
    isSeeAllOrientation : boolean,
    isSeeAllAchievement : boolean
}
@inject(Stores.jobSeekerStore)
@inject(Stores.reviewStore)
@inject(Stores.educationStore)
@inject(Stores.experienceStore)
@inject(Stores.skillStore)
@inject(Stores.orientationStore)
@inject(Stores.achievementStore)

@observer
export default class JobSeekerList extends AppComponentBase<IJobSeekerListProps, IJobSeekerListState> {
    formRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            Actor :"Chủ tài khoản",
            modalVisible: false,
            selectedID: 1,
            isAnyItemClicked: false,
            isAddJobSeekerPopupOpen: false,
            jobSeekerName: "",
            jobSeekerDesc: "",
            isEditJobSeekerPopupOpen: false,
            isVerifyDeletePopupOpen: false,
            isUpdateOrientationPopupOpen:false,
            UpdatejobSeeker :{
                id: 1,
                name: '',
                birthday: '',
                description: '',
                workLocation: '',
                address: '',
                email: '',
                phoneNumber: '',
                expertise: '',
                facebook: '',
                github: '',
                twitter: '',
                image: '',
                field: '',
                sex : '',
            },
            isSeeAllEducation : false,
            isSeeAllExperience : false,
            isSeeAllSkill : false,
            isSeeAllOrientation : false,
            isSeeAllAchievement : false
        }

    }

    //Sanh code
    async componentDidMount() {
        await this.getJobSeekerByID(this.state.selectedID);
        await this.getReviewByID(this.props.jobSeekerStore.jobSeeker.id);
        await this.getEducationsByID(this.props.jobSeekerStore.jobSeeker.id);
        await this.getAllExperiencesByID(this.props.jobSeekerStore.jobSeeker.id);
        await this.getAllSkillsByID(this.props.jobSeekerStore.jobSeeker.id);
        await this.getAllOrientationsByID(this.props.jobSeekerStore.jobSeeker.id);
        await this.getAllAchievementByID(this.props.jobSeekerStore.jobSeeker.id);
      
        const {jobSeeker} = this.props.jobSeekerStore;
        if (jobSeeker === undefined) return;

        this.setState({
            UpdatejobSeeker :{
                id: jobSeeker.id,
                name: jobSeeker.name,
                birthday: jobSeeker.birthday,
                description: jobSeeker.description,
                workLocation: jobSeeker.workLocation,
                address: jobSeeker.address,
                email: jobSeeker.email,
                phoneNumber: jobSeeker.phoneNumber,
                expertise: jobSeeker.expertise,
                facebook: jobSeeker.facebook,
                github: jobSeeker.github,
                twitter: jobSeeker.twitter,
                image: jobSeeker.image,
                field: jobSeeker.field,
                sex : jobSeeker.sex,
            }
        })
    }
// thy code

    OrientationModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    };

    saveFormRef = (formRef: any) => {
        this.formRef = formRef;
    };


    async UpdateOrientationModalOpen () {
        this.OrientationModal();
    }
    
    handleCreate = () => {
        this.setState({ isUpdateOrientationPopupOpen: true })
    };

    handleChangeSelect = (name: string, event: any) => {
        let items = this.state.UpdatejobSeeker;
        items = JSON.parse(JSON.stringify(items));
        items[`${name}`] = event;
        this.setState({
            UpdatejobSeeker: items,
        });
    }

    handleEdit = () => {
        this.setState({ isEditJobSeekerPopupOpen: true })
    }

    handleItemClicked = (id: number) => {
        let all_item = document.getElementsByClassName("custom-table-line-activated");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "custom-table-line";
        }

        let selected_item: any = document.getElementById("job-type-list-item-" + id);
        selected_item.className = "custom-table-line-activated";

        this.setState({
            isAnyItemClicked: true, selectedID: id
        });
    }

    UpdateJobSeekerInput = async () => {
        // console.log(this.state.jobSeeker);
        // await this.props.jobSeekerStore.UpdateJobSeekerInput(this.state.jobSeeker);
        console.log(this.state.UpdatejobSeeker);
        await this.props.jobSeekerStore.update(this.state.UpdatejobSeeker);
    }

    public render() {
        const {jobSeeker} = this.props.jobSeekerStore;
        const {review} = this.props.reviewStore;
        const {educations} = this.props.educationStore;
        const {experiences} = this.props.experienceStore;
        const {skills} = this.props.skillStore;
        const {orientations} = this.props.orientationStore;
        const {achievements} = this.props.achievementStore;
        //thêm
         const formItemLayout = {
      labelCol: {  
        xs: { span: 8 },
        sm: { span:  8 },
        md: { span:  8 },
        lg: { span:  8 },
        xl: { span:  8 },
        xxl: { span:  8 },
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 16 },
        md: { span: 16 },
        lg: { span: 16 },
        xl: { span: 16 },
        xxl: { span: 16 },
      },
    };

        if (jobSeeker === undefined || educations === undefined || experiences === undefined 
            || skills === undefined || orientations === undefined || achievements === undefined) 
            return (<div></div >)
        
        let numberofReview = 0;
        var rating : number = 0;
        let school : string = "";
        if (educations.items[0] === undefined) 
            school = "Chưa có";
        else 
        {
            school = educations.items[0].school.substring(0,32);
            if (educations.items[0].school.length > 32)
                school += "...";
        }

        const hpbd = jobSeeker.birthday.substr(8,2) + "/" + jobSeeker.birthday.substr(5,2) + "/" + jobSeeker.birthday.substr(0,4);
        
        let description : string = "";
        if (experiences.items[0] === undefined)
            description = "Chưa có";
        else
        {
            description = experiences.items[0].role.substring(0,32);
            if (experiences.items[0].role.length > 32) 
                description += "...";
        }

        let company : string = "";
        if (experiences.items[0] === undefined)
            company = "Chưa có";
        else
        {
            company = experiences.items[0].company.substring(0,32);
            if (experiences.items[0].company.length > 32) 
                company += "...";
        }

        if (review !== undefined)
            {
                numberofReview = review.numberOfReview;
                rating = +review.ratingStar;
            }
        
        let orientaion : string = "Chưa có";
        if (orientations.items[0] !== undefined)
        {
            orientaion = orientations.items[0].orientationName.substring(0,25);
            if (orientations.items[0].orientationName.length > 25)
                orientaion += "...";
        }
        
        const RateSection = () =>
            {
                return(
                    <div style={{marginBottom:30}}>
                        <Rate disabled={true} count={5} allowHalf={true} defaultValue={rating}></Rate>
                    </div>
                );
            }
        
        const EducationItems = educations.items.map((value : IEducationItem, index : number) => 
        {
            const yearstart = value.startYear.substr(0,4);
            const yearend = value.endYear.substr(0,4);
            if (index >= 3 && !this.state.isSeeAllEducation) return;
            return (                
                <div style={{margin :30}}  className="row-margin-frames">
                <div className="study-area" style={{borderStyle:"none",backgroundColor:"whitesmoke"}}>
                    <h3 style={{fontSize:18}}><b>{value.school}</b></h3>
                    <h6 style={{fontSize:12, color:"GrayText"}}>{yearstart} - {yearend}</h6>
                    <h6 style={{fontSize:16}}><b>{value.majors}</b></h6>
                </div>
                 </div>
            );
        })

        const SectionEducation = () => {
            let content = "Xem tất cả";
            if (this.state.isSeeAllEducation)
                content = "Xem ít hơn";
                
            return(
                <div className="section">
                    <h2 style={{height:40}}></h2>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <h2  style={{marginLeft :30,fontWeight:900, fontSize:25}} ><b>Học vấn</b></h2>
                        <div style={{marginRight: 16}}>
                            <Button className="btnUpdate" type={"default"} icon="edit">Chỉnh sửa</Button>
                            <Button className="btnUpdate" type={"primary"} icon="plus">Thêm mới</Button>
                        </div>
                    </div>
                    <ul>{EducationItems}</ul>
                    <div style={{justifyContent:"center", display:'flex'}}>
                        <Button className="btnXemTatCa"
                        onClick = {() => {this.setState({isSeeAllEducation : !this.state.isSeeAllEducation})}}>{content} 
                        </Button>
                    </div>
                    
                    <h2 style={{height:40}}></h2>
                </div>
            );
        }

        const ExperienceItems = experiences.items.map((value : IExperienceItem, index : number) => 
        {
            const yearstart = value.startYear;
            const yearend = value.endYear;
            if (index >= 3 && !this.state.isSeeAllExperience) return;
            return (                
                <div style={{margin :30}}  className="row-margin-frames">
                <div className="study-area" style={{borderStyle:"none",backgroundColor:"whitesmoke"}}>
                    <h3 style={{fontSize:18}}><b>{value.company}</b></h3>
                    <h6 style={{fontSize:12, color:"GrayText"}}>{yearstart} - {yearend}</h6>
                    <h6 style={{fontSize:16}}><b>{value.role}</b></h6>
                    <h6 style={{fontSize:16}}>{value.description}
                    </h6>
                </div>
            </div>
            );
        })

        const SectionWork = () => {
            let content : string = "Xem tất cả";
            if (this.state.isSeeAllExperience)
                content = "Xem ít hơn";
            return(
                <div className="section">
                <h2 style={{height:40}}></h2>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <h2  style={{marginLeft :30,fontWeight:900, fontSize:25}} ><b>Kinh nghiệm</b></h2>
                    <div style={{marginRight: 16}}>
                        <Button className="btnUpdate" type={"default"} icon="edit">Chỉnh sửa</Button>
                        <Button className="btnUpdate" type={"primary"} icon="plus">Thêm mới</Button>
                    </div>
                </div>
                <ul>{ExperienceItems}</ul>
                <div style={{justifyContent:"center", display:'flex'}}>
                    <Button className="btnXemTatCa"
                    onClick = {() => {this.setState({isSeeAllExperience : !this.state.isSeeAllExperience})}}
                    >{content}</Button>
                </div>
                
                <h2 style={{height:40}}></h2>
            </div>
            );
        }

        const SkillItems = skills.items.map((value : ISkillItem, index : number) => 
        {
            if (index >= 3 && !this.state.isSeeAllSkill) return;
            return (                
                <div style={{margin :30}}  className="row-margin-frames">
                <div className="study-area" style={{borderStyle:"none",backgroundColor:"whitesmoke"}}>
                    <h3 style={{fontSize:18}}><b>{value.skillName}</b></h3>
                </div>
                </div>
            );
        })

        const SectionSkill = () => {
            let content : string = "Xem tất cả";
            if (this.state.isSeeAllSkill)
                content = "Xem ít hơn";
            return(
                <div className="section">
                <h2 style={{height:40}}></h2>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <h2  style={{marginLeft :30,fontWeight:900, fontSize:25}} ><b>Kỹ năng</b></h2>
                    <div style={{marginRight: 16}}>
                        <Button className="btnUpdate" type={"default"} icon="edit">Chỉnh sửa</Button>
                        <Button className="btnUpdate" type={"primary"} icon="plus">Thêm mới</Button>
                    </div>
                </div>
                <ul>{SkillItems}</ul>
        
                <div style={{justifyContent:"center", display:'flex'}}>
                    <Button className="btnXemTatCa"
                    onClick = {() => {this.setState({isSeeAllSkill : !this.state.isSeeAllSkill})}}
                    >{content}</Button>
                </div>
                
                <h2 style={{height:40}}></h2>
            </div>
            );
        }   

        const OrientationItems = orientations.items.map((value : IOrientationItem, index : number) => 
        {
            if (index >= 3 && !this.state.isSeeAllOrientation) return;
            return (                
                <div style={{margin :30}}  className="row-margin-frames">
                <div className="study-area" style={{borderStyle:"none",backgroundColor:"whitesmoke"}}>
                <h3 style={{fontSize:18}}><b>{value.orientationName}</b></h3>
                </div>
                 </div>
            );
        })


        // function SectionOriention() {
        //     return(
        //         <div className="section">
        //         <h2 style={{height:40}}></h2>
        //         <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        //             <h2  style={{marginLeft :30,fontWeight:900, fontSize:25}} ><b>Định hướng công việc</b></h2>
        //             <div style={{marginRight: 16}}>
        //                 <Button className="btnUpdate"  type={"default"} icon="edit" onClick={() => this.UpdateOrientationModalOpen()}>Chỉnh sửa</Button>
        //                  {/* thy code  */}
        //                 <UpdateOrientation
        //                     wrappedComponentRef={this.saveFormRef}
        //                     visible={this.state.modalVisible}
        //                     onCancel={() =>
        //                         this.setState({
        //                         modalVisible: false,
        //                         })
        //                     }
        //                     onCreate={this.handleCreate}
        //                 />
        //                 <Button className="btnUpdate" type={"primary"} icon="plus">Thêm mới</Button>
        //             </div>
        //         </div>
        //         <ul>{OrientationItems}</ul>
        
        //         <div style={{justifyContent:"center", display:'flex'}}>
        //             <Button className="btnXemTatCa">Xem tất cả</Button>
        //         </div>
//của sanh
        const SectionOriention = () => {
            let content : string = "Xem tất cả";
            if (this.state.isSeeAllExperience)
                content = "Xem ít hơn";
            return(
                <div className="section">
                <h2 style={{height:40}}></h2>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <h2  style={{marginLeft :30,fontWeight:900, fontSize:25}} ><b>Định hướng công việc</b></h2>
                    <div style={{marginRight: 16}}>
                        <Button className="btnUpdate" type={"default"} icon="edit" onClick={() => this.UpdateOrientationModalOpen()}>Chỉnh sửa</Button>
                        <UpdateOrientation
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.modalVisible}
                            onCancel={() =>
                                this.setState({
                                modalVisible: false,
                                })
                            }
                            onCreate={this.handleCreate}
                        />
                        <Button className="btnUpdate" type={"primary"} icon="plus">Thêm mới</Button>
                    </div>
                </div>
                <ul>{OrientationItems}</ul>
        
                <div style={{justifyContent:"center", display:'flex'}}>
                     <Button className="btnXemTatCa"
                    onClick = {() => {this.setState({isSeeAllOrientation : !this.state.isSeeAllOrientation})}}
                    >{content}</Button>
                </div>

                
                <h2 style={{height:40}}></h2>
            </div>
            );
        }   

        const AchievementItems = achievements.items.map((value : IAchievementItem, index : number) => 
        {
            if (index >= 3 && !this.state.isSeeAllAchievement) return;
            return (                
                <div style={{margin :30}}  className="row-margin-frames">
                <div className="study-area" style={{borderStyle:"none",backgroundColor:"whitesmoke"}}>
                    <h3 style={{fontSize:18}}><b>{value.achievementName}</b></h3>
                    <h6 style={{fontSize:12, color:"GrayText"}}>{value.year}</h6>
                    <h6 style={{fontSize:16}}><b>{value.organization}</b></h6>
                    <h6 style={{fontSize:16}}>{value.note}
                    </h6>
                </div>
            </div>
            );
        })


        const SectionAchievement = () => {
            let content : string = "Xem tất cả";
            if (this.state.isSeeAllAchievement)
                content = "Xem ít hơn";
            return(
                 <div className="section">
                <h2 style={{height:40}}></h2>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <h2  style={{marginLeft :30,fontWeight:900, fontSize:25}} ><b>Thành tựu chứng nhận</b></h2>
                    <div style={{marginRight: 16}}>
                        <Button className="btnUpdate" type={"default"} icon="edit">Chỉnh sửa</Button>
                        <Button className="btnUpdate" type={"primary"} icon="plus">Thêm mới</Button>
                    </div>
                </div>
                <ul>{AchievementItems}</ul>
                <div style={{justifyContent:"center", display:'flex'}}>
                    <Button className="btnXemTatCa"
                    onClick = {() => {this.setState({isSeeAllAchievement : !this.state.isSeeAllAchievement})}}
                    >{content}</Button>
                </div>
                
                <h2 style={{height:40}}></h2>
            </div>
            );
        }   

        const InfoButton = () =>        
        {
            if (this.state.Actor === "Chủ tài khoản")
                return (<div></div>)
            return(
                <div className="column-button-info">
                    <div className="button-info">
                        <button className="button btn-invite">Mời nhận việc</button>
                        <button className="button btn-save">Lưu</button>
                        <button style={{marginRight :30}} className="button btn-message">Nhắn tin</button>
                    </div>
                </div>
            )
        }

        const SectionInfoShare = () => {
            return(
            <div>
            <footer className="row share-info row-padding">
                <div className="column-share">
                    <div className="column-link-info">
                        <h6  style={{margin :30}} >Chia sẻ trang</h6>
                          <Button shape="circle" style={{ outline: 'none'}}>
                             <Avatar style={{ height: 40, width: 40 }} shape="circle" alt={'profile'} src={fbPicture} />
                          </Button>
                          <Button style={ {marginLeft: 10, outline: 'none'} } shape="circle" >
                             <Avatar style={{ height: 40, width: 40 }} shape="circle" alt={'profile'} src={TwPicture} />
                          </Button>
                          <Button shape="circle" style={ {marginLeft: 10, outline: 'none'} }>
                             <Avatar style={{ height: 40, width: 40 }} shape="circle" alt={'profile'} src={LkPicture} />
                          </Button>
                    </div>
                <InfoButton></InfoButton>
                </div>
            </footer>
        </div>
    );
}  



        const url_background = "https://images5.alphacoders.com/783/783174.jpg";
        return (
            <div style={{ margin: "auto", marginTop: "20px", width: "60%", minWidth:900 }}>
                {/* info   */}
                <div >
                    <div className="blueHeader" style={{ justifyContent:"flex-end", display:"flex", backgroundImage:"url(" + url_background  + ")"}}>
                        <button className="buttonEditHeader" style={{marginRight: 0, height:40, width:200}}>Chỉnh sửa ảnh bìa</button>
                        <button className="buttonEditHeader" style={{marginRight: 50, height:40, width:200}}  onClick={() => this.handleEdit()}>Chỉnh sửa thông tin</button>
                    </div>
                    
                    <div className="whiteHeader">
                        {/* <img className="imageHeader" src={pic} alt="No"></img> */}
                        {/* <Avatar className="imageHeader" size="large" src={pic}></Avatar> */}
                        <div className="avatarJobSeeker">
                            <img className="imageHeader" src={"https://file.tintuckpop.net/resize/600x-/tintuckpop/2020/03/03/20200303112318-42d6-da71-8903.jpg"} alt="No"></img>
                        </div>
                        <div>
                            <div className="banner" style={{marginLeft:220,marginTop:-60}}>
                                <div style={{flexDirection:"row", display:"flex", color:"GrayText", fontWeight:800, marginBottom:10, marginTop:30, justifyContent:"center"}}>
                                <img src={picLocation}
                                            alt="" style={{width:30, height:30, marginTop:-10}}/>
                                <h6 style={{fontSize:12, marginRight:15}}>
                                    <b>{jobSeeker.workLocation}</b>
                                </h6>

                                <img src={picPerson}
                                            alt="" style={{width:30, height:30, marginTop:-10}}/>
                                <h6 style={{fontSize:12, marginRight:15}}>
                                     <b>{jobSeeker.sex} 
                                  
                                     </b>
                                </h6>

                                <img src={"https://www.materialui.co/materialIcons/social/cake_grey_192x192.png"}
                                            alt="" style={{width:30, height:30, marginTop:-10}}/>
                                <h6 style={{fontSize:12, marginRight:15}}>
                                    <b>{hpbd}</b>
                                </h6>

                                </div>
                                <h2 style={{fontSize:20}}>{jobSeeker.name}</h2>
                                <div>
                                    <h6 style={{fontSize:14}}>"{jobSeeker.description}"
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row-padding info-form" style={{marginTop:100, marginLeft:50}}>
                            <div className="column-info-form1">
                                <div className="column">
                                    <h2>Thông tin cá nhân</h2>
                                    <div style={{fontSize:16}}> 
                                    <p>Địa chỉ: {jobSeeker.address}</p>
                                    <p>Email: {jobSeeker.email}</p>
                                    <p>Số điện thoại: {jobSeeker.phoneNumber}</p>
                                    <p>Chuyên môn: {jobSeeker.expertise}</p>
                                    <p>Lĩnh vực hoạt động: {jobSeeker.field}</p>
                                    <p>
                                        <span style={{marginRight:20}}>Facebook: <span><u><b>{jobSeeker.facebook}</b></u></span></span>
                                        <span style={{marginRight:20}}>Github: <span><u><b>{jobSeeker.github}</b></u></span></span>
                                        <span>Twitter: <span><u><b>{jobSeeker.twitter}</b></u></span></span>
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column-info-form2">
                                <div className="column">
                                    <div className="rating">
                                        <h6 style={{fontSize:12, color:"GrayText"}}>{numberofReview} lượt đánh giá</h6>
                                        <h3 style={{fontSize:25, fontWeight:"bold"}}>{rating}</h3>
                                        <RateSection></RateSection>
                                        {/* <button>Viết đánh giá</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row-padding current-work-form">
                                <div className="current-form" style={{marginTop:30, marginRight:10}}>
                                    <div className="current" style={{height:80,width:150, alignItems:"center", fontSize:16,marginRight:20}}>
                                        <p className="current-content1">
                                            <img src="https://yourfaithrs.com/wp-content/uploads/2019/06/education-icon-white-png.png" 
                                            alt="" style={{width:70, marginLeft:20, marginRight:-20}}/>
                                        </p>
                        
                                        <div className="current-content2"  style={{fontSize:14, marginLeft:30}}>
                                            <h4>Tốt nghiệp</h4>
                                            <h5 style={{fontWeight:"lighter"}}>{school}</h5>
                                        </div>
                                    </div>
                                    <div className="current" style={{height:80,width:150, alignItems:"center", fontSize:16, marginRight:20}}>
                                        <p className="current-content1">
                                            <img src={IconBag}
                                            alt="" style={{width:80, marginLeft:20, marginRight:-20}}/>
                                        </p>
                        
                                        <div className="current-content2"  style={{fontSize:14, marginLeft: 30}}>
                                            <h4>{description}</h4>
                                            <h5 style={{fontWeight:"lighter"}}>{company}</h5>
                                        </div>
                                    </div>
                                    <div className="current">
                                    <div className="current" style={{height:60,width:150, alignItems:"center", fontSize:16}}>
                                        <p className="current-content1">
                                        <img src="https://www.pngkey.com/png/full/297-2975139_conscious-aging-challenge-white-icon.png" 
                                            alt="" style={{width:60, marginLeft:20, marginRight:-20, marginTop:10}}/>
                                        </p>
                        
                                        <div className="current-content2"  style={{fontSize:14, alignContent:"center", marginTop:20, marginLeft:30}}>
                                            <h4>{orientaion}</h4>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionEducation></SectionEducation>
            
                {/* work */}
                <SectionWork></SectionWork>

                {/* skill */}
                <SectionSkill></SectionSkill>
                
                {/* oriented */}
                <SectionOriention></SectionOriention>

                {/* achievement */}
                <SectionAchievement></SectionAchievement>

                {/* infoshare */}
                <SectionInfoShare></SectionInfoShare>

                
                 <CustomModal className="Custom_Modal_Out_Layout" style={{margin :10}} 
                    shadow={true}
                    type="custom"
                    title="Chỉnh sửa thông tin"
                    open={this.state.isEditJobSeekerPopupOpen}
                    closeModal={() => { this.setState({ isEditJobSeekerPopupOpen: false }); }}
                >
                <FormItem className="Fontstyle" style={{margin :20}}  label={('Họ và tên')}{...formItemLayout} >
                    <Input defaultValue={this.state.UpdatejobSeeker.name} 
                    onChange={(e) => {
                        let temp_name : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, name : temp_name}});
                        }}/>
                </FormItem>

                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Ngày sinh')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.birthday.substr(8,2) + "/" + jobSeeker.birthday.substr(5,2) + "/" + jobSeeker.birthday.substr(0,4)} 
                    onChange={(e) => {
                        let date : string = e.target.value;
                        let temp_birthday : string = "";
                        temp_birthday += date.substr(6,4) + "-" + date.substr(3,2) + "-" + date.substr(0,2) + "T06:26:15.053" ;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, birthday : temp_birthday}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Giới tính')} {...formItemLayout}>
                    <select style={{paddingLeft: 7}} className="styleSelect" defaultValue={jobSeeker.sex} 
                    onChange={(e) => {
                        let temp_sex : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, sex : temp_sex}});
                        }}
                    >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Nơi làm việc')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.workLocation}
                    onChange={(e) => {
                        let tempworkLocation : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, workLocation : tempworkLocation}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle" style={{margin :20}}  label={('Dòng giới thiệu')} {...formItemLayout}>
                    <Input  defaultValue={jobSeeker.description} 
                    onChange={(e) => {
                        let tempdescription : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, description : tempdescription}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Địa chỉ')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.address} 
                    onChange={(e) => {
                        let temp_address : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, address : temp_address}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Email liên hệ')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.email}
                    onChange={(e) => {
                        let temp_email : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, email : temp_email}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Số điện thoại')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.phoneNumber} 
                    onChange={(e) => {
                        let temp_phoneNumber : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, phoneNumber : temp_phoneNumber}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Chuyên môn')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.expertise}  
                    onChange={(e) => {
                        let temp_expertise : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, expertise : temp_expertise}});
                        }} />
                </FormItem>
                <FormItem  className="Fontstyle" style={{margin :20}}  label={('Lĩnh vực hoạt động')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.field} 
                    onChange={(e) => {
                        let temp_field : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, field : temp_field}});
                        }} />
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20, alignContent:'left'}}  label={('Facebook')} {...formItemLayout}>
                    <Input  defaultValue={jobSeeker.facebook} 
                     onChange={(e) => {
                        let temp_facebook : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, facebook : temp_facebook}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20, alignContent:'left'}}  label={('Github')} {...formItemLayout}>
                    <Input  defaultValue={jobSeeker.github}  
                    onChange={(e) => {
                        let temp_github : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, github : temp_github}});
                        }}/>
                </FormItem>
                <FormItem className="Fontstyle"  style={{margin :20}}  label={('Twitter')} {...formItemLayout}>
                    <Input defaultValue={jobSeeker.twitter} 
                     onChange={(e) => {
                        let temp_twitter : string  = e.target.value;
                        this.setState({UpdatejobSeeker : {...this.state.UpdatejobSeeker, twitter : temp_twitter}});
                        }}/>
                </FormItem>
                    <div style={{margin :20}}  className="Custom_Modal_Footer">
                        <div style={{ display: "flex"}  } >
                            {/* <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerAddjobSeekerConfirmation()}>OK</button> */}
                             
                                {/* <button className="Simple_White_Button" onClick={() => { this.setState({ isAddjobSeekerPopupOpen: false }) }}>Cancel</button> */}
                                <button style={{margin :20}}  className="Simple_White_Button"  onClick={() => {  this.setState({ isEditJobSeekerPopupOpen: false }) }} >Hủy thay đổi</button>
                                <button style={{margin :20}}  className="Simple_Blue_Button" onClick={() => {this.UpdateJobSeekerInput(); this.setState({ isEditJobSeekerPopupOpen: false })}}>Lưu thay đổi</button>
                        </div>
                    </div>
            </CustomModal>

            </div >
        );
    }

    handlerAddJobTypeConfirmation = () => {

         this.setState({ isAddJobSeekerPopupOpen: false });
    }

    async getJobSeekerByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.jobSeekerStore.getJobSeekerByID(dto);
    }

    async getReviewByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.reviewStore.getReviewByID(dto);
    }

    async getEducationsByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.educationStore.getAllEducationByID(dto);
    }

    async getAllExperiencesByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.experienceStore.getAllExperienceByID(dto);
    }

    async getAllSkillsByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.skillStore.getAllSkillByID(dto);
    }

    async getAllOrientationsByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.orientationStore.getAllOrientationByID(dto);
    }

    async getAllAchievementByID(id1 : number) {
        let dto: EntityDto = {
            id: id1,
        }
        await this.props.achievementStore.getAllAchievementByID(dto);
    }


    handlerVerifyEditJobTypeConfirmation = () => {

    }

    handlerVerifyDeleteJobTypeConfirmation = () => {
        let dto: EntityDto = {
            id: this.state.selectedID
        }
        this.props.jobSeekerStore.deleteJobSeeker(dto);
        this.setState({ isVerifyDeletePopupOpen: false });
    }

}
