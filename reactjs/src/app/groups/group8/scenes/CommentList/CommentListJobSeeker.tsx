

import React, { useState } from 'react'
import '../../styles.less'
import './CommentList.less'
import { inject, observer } from 'mobx-react';
//import { ClickAwayListener } from '@material-ui/core'
//import CustomModal from 'app/shared/components/CustomModal/CustomModal'
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import CommentStore, { ICommentItem } from '../../stores/CommentStore';
import { CreateOrUpdateCommentInput } from '../../services/dto/CommentDTO/createOrUpdateCommentInput';
// import { GetCommentInput } from '../../services/dto/CommentDTO/GetCommentInput';
import { Avatar, Button, List, message, Modal, Rate} from 'antd';
import { GetCommentInput } from '../../services/dto/CommentDTO/GetCommentInput';
import { DeleteComment } from '../../services/dto/CommentDTO/deleteComment';   
// import AuthenticationStore from 'shared/stores/authenticationStore';
//import { GetAllCommentOutput } from '../../services/dto/CommentDTO/getAllCommentOutput';
//import { Form } from 'antd';
//import { CreateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
// import { UpdateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
//import { EntityDto } from 'shared/services/dto/entityDto';
// import jwt_decode from 'jwt-decode';


export interface ICommentListProps {
    commentStore: CommentStore,
}

export interface ICommentListState {
    comment: CreateOrUpdateCommentInput,
    deleteComment: DeleteComment,
    isComfirm: boolean,
    desColor: string,
    starColor: string,
    reasColor: string,
    desWarning: string,
    reasWarning: string,
} 
const info = (messString: string) => {
    message.success(messString);
};
  



//@inject(Stores.jobTypeStore)
@inject(Stores.commentStore, Stores.AuthenticationStore)
@observer
export default class CommentList extends AppComponentBase<ICommentListProps, ICommentListState> {

    //user/:id 
    //this.props.path.match.id 


    constructor(props: any) {
        super(props);
        this.state = {
            comment: {
                IDRecruiter: 2,
                IDJobSeeker: 1,
                StarNumber: 0,
                Reason: '',
                Description: '',
                IsRecruiterWrite: false,
            },
            deleteComment:{
                idRecruiter: 2,
                idJobSeeker: 1,
                isRecruiterWrite:false
            },
            isComfirm: false,
            desColor: "transparent",
            starColor: "transparent",
            reasColor: "transparent",
            desWarning: "", 
            reasWarning:"",
        }

    }

    

    // async componentDidMount() {
    //     let getCommentInput: GetCommentInput = {
    //         isRecruiterWrite: false,
    //         ID: 11,
    //     }
    //     console.log("*");

    //     // console.log(this.props.authenticationStore.);
    //      await this.getAllComment(getCommentInput);
        
    // }

    async componentDidMount() { 
        console.log("*");
        let getCommentInput: GetCommentInput = {
            isRecruiterWrite: false,
            ID: this.state.comment.IDRecruiter
            }
        // console.log(this.props.authenticationStore.);
         await this.getAllComment(getCommentInput);
        
    }

    // Modal = () => {
    //     this.setState({
    //         modalVisible: !this.state.modalVisible,
    //     });
    // };


    async getAllComment(getCommentInput: GetCommentInput) {
        await this.props.commentStore.getAllComment(getCommentInput);

        var item:ICommentItem ={
                    description:"",
                    id:1,
                    idJobSeeker:1,
                    image:"",
                    jobSeekerName:"",
                    lastModificationTime:null,
                    reason:"",
                    starNumber:-1,
                }
            
                this.props.commentStore.Comments.items.forEach(m=>{
                    item =  (m.idJobSeeker==this.state.comment.IDJobSeeker)?m:item;
                })
            
                if(item.starNumber > 0)
                {
                    this.setState({
                        comment: {
                            Reason :item.reason,
                            Description: item.description,
                            StarNumber: item.starNumber,
                            IDJobSeeker: this.state.comment.IDJobSeeker,
                            IDRecruiter: this.state.comment.IDRecruiter,
                            IsRecruiterWrite: this.state.comment.IsRecruiterWrite,
                            }
                        })
                }

    }

    async deleteComment(deleteCommentInput: DeleteComment) {
        await this.props.commentStore.deleteComment(deleteCommentInput);
    }


    // handleCreate = () => {
    //     this.setState({ isAddJobTypePopupOpen: true })
    // };

    handleDelete = () => {

    }

    closeAllSelectedItem = () => {

    }

    handleEdit = () => {

    }
    handleChangeInput = (event: any) => {
        const { target: { id, value } } = event
        let items = this.state.comment;
        items = JSON.parse(JSON.stringify(items));
        items[`${id}`] = value;
        this.setState(
            { comment: items, }
        );
        this.setState({
                desColor:"transparent",
                reasColor: "transparent",
            });
    }

   
    // handleChangeInput = (value: string) => { 
    //     let items = this.state.comment;
    //     items = JSON.parse(JSON.stringify(items));
    //     items.Description = "Hello";
    //     items.Reason = "Hi";
    //     this.setState(
    //         {comment:items,
    //         }
    //     );
    // }
    // handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {

    //     let items = this.state.comment;
    //     items = JSON.parse(JSON.stringify(items));
    //     items.Description = "adasdasdasdadasdasdasdasdasdasdasda";
    //     this.setState({
    //         comment:items,
    //     });
    // }  

    createCommentAsync = async () =>{ 
        var dem = 0;
        if(this.state.comment.StarNumber <=0 || this.state.comment.StarNumber==null)
        {
            console.log("chua luu db, sao <= 0");
            this.setState({
                starColor:"red"
            });
            dem++; 
        }
        if(this.state.comment.Description.trim().length < 10)
        {
            console.log("chua luu db, des.length <= 10");
            this.setState({
                desColor:"red",
                desWarning:"Nhận xét phải đủ 10 ký tự",
            });
            dem++; 
        }
        if(this.state.comment.Description.trim().length >500)
        {
            console.log("chua luu db, des.length <= 10");
            this.setState({
                desColor:"red",
                desWarning:"Nhận xét phải nhỏ hơn 500 ký tự",
            });
            dem++; 
        }
        if(this.state.comment.Reason.trim().length>100)
        {
            console.log("Chua luu db, reas.length>100");
            this.setState(
                {
                    reasColor:"red",
                    reasWarning: "Lý do phải nhỏ hơn 100 ký tự"
                }
            );
            dem++;
        }
        if(dem>0)
        {
            return;
        }
        console.log("luu db");
        await this.props.commentStore.createComment(this.state.comment);
        info("Nhận xét đã được được cập nhập") 
        let getCommentInput: GetCommentInput = {
            isRecruiterWrite: false,
            ID: this.state.comment.IDRecruiter
            }
        console.log("*");

        // console.log(this.props.authenticationStore.);
         //await this.getAllComment(getCommentInput);
        await this.getAllComment(getCommentInput);
    }
    

    deleteCommentHandler = async () => { 
        if(this.state.comment.StarNumber==null || this.state.comment.StarNumber <= 0){
            message.error("Không có đánh giá để xóa");
        }
        else{
            await this.props.commentStore.deleteComment(this.state.deleteComment); 
            let getCommentInput: GetCommentInput = {
                isRecruiterWrite: false,
                ID: this.state.comment.IDRecruiter
                } 
    
            // console.log(this.props.authenticationStore.);
             //await this.getAllComment(getCommentInput);
            await this.getAllComment(getCommentInput);
            info("Xóa thành công")
        }
        this.setState({
            comment: {
                Reason :"",
                Description: "",
                StarNumber: 0,
                IDJobSeeker: this.state.comment.IDJobSeeker,
                IDRecruiter: this.state.comment.IDRecruiter,
                IsRecruiterWrite: this.state.comment.IsRecruiterWrite,
                }
            })
    }

    // handleItemClicked = (id: number) => {
    //     let all_item = document.getElementsByClassName("custom-table-line-activated");

    //     for (let i = 0; i < all_item.length; i++) {
    //         all_item[i].className = "custom-table-line";
    //     }

    //     let selected_item: any = document.getElementById("job-type-list-item-" + id);
    //     selected_item.className = "custom-table-line-activated";

    //     this.setState({
    //         isAnyItemClicked: true, selectedID: id
    //     });

    // } 
    handleChange = (StarNumber: number) => {
        let items = this.state.comment;
        items = JSON.parse(JSON.stringify(items));
        items.StarNumber = StarNumber;
        this.setState(
            { comment: items, }
        );
        this.setState({
            starColor:"transparent"
        })
    }

    
    
     


    public render() { 
        const { StarNumber } = this.state.comment;
        const { Reason } = this.state.comment;
        const { Description } = this.state.comment;
        const { Comments } = this.props.commentStore;
        if (Comments === undefined) return (<div>Comments</div >)

        let list: ICommentItem[];
        list = Comments.items;
       
        const App = () => {
            const [visible, setVisible] = useState(false);
            return (
              <>
                <Button type="primary" className="save-comment" onClick={() => setVisible(true)}>
                Lưu nhận xét
                </Button>
                <Modal
                  title="Thông báo!"
                  centered
                  visible={visible}
                  onOk={() => {
                      setVisible(false);
                      this.createCommentAsync();
                      console.log("Luu confirm");
                    }}
                  onCancel={() => {
                      setVisible(false);
                      console.log("Chua luu confirm");
                    }}
                  width={500}
                >
                  <p>Bạn có muốn lưu nhận xét?</p>
                </Modal>
              </>
            );
          };

        const Appdelete = () => {
            const [visible, setVisible] = useState(false);
            return (
              <>
                <Button type="primary" className="save-comment" onClick={() => setVisible(true)}>
                Hủy đánh giá
                </Button>
                <Modal
                  title="Thông báo!"
                  centered
                  visible={visible}
                  onOk={() => {
                      setVisible(false);
                      this.deleteCommentHandler();
                    }}
                  onCancel={() => {
                      setVisible(false);
                    }}
                  width={500}
                >
                  <p>Bạn có muốn xóa nhận xét?</p>
                </Modal>
              </>
            );
          };
        
        return (
            <div className="container"> 
                <div className="row justify-conten-center">
                    <div className="col-md-7 text-center rating">
                        <div className="avt-users">
                                <Avatar size={160}/>
                        </div>
                        <h2>Ngô Công Hậu</h2>
                        <span>Đánh giá của bạn</span>
                        <form id="feedback-stars" className="feedback-stars"  >
                          <div className="countstar"> 
                             <h2 >{StarNumber} sao</h2>
                             <Rate   onChange={this.handleChange} value={StarNumber} className="star" /> <br />
                            <span id="error2" style={{color:this.state.starColor}} >Số sao không được bỏ trống</span>
                            </div>
                            <div className="comment-container">
                                <div className="row fill-comment">
                                    <div className="col fill-comment">
                                        <h2>Viết nhận xét</h2>

                                        <form action="" className="comment-content" id="comments-content">
                                            <div>
                                                <div className="comment-item">
                                                    <div>
                                                          Vì sao bạn có bài nhận xét <span id="error1" style={{color:this.state.reasColor,fontWeight:400}} >{this.state.reasWarning}</span>
                                                    </div>
                                                    <input type="text" name="content1" className="comment-input" id="Reason" placeholder="Vì sao" onChange={this.handleChangeInput} value={Reason} />
                                                </div>
                                                <div className="comment-item">
                                                    <div>
                                                           Nhận xét của bạn * <span id="error1" style={{color:this.state.desColor,fontWeight:400}} >{this.state.desWarning}</span>
                                                    </div>
                                                    <textarea name="content2" id="Description" className="main comment-input" placeholder="Vì sao" required onChange={this.handleChangeInput} value={Description}></textarea>
                                                </div>
                                                <div className="btn-form-comment">
                                                    <div className="btn-comment">
                                                        <Appdelete></Appdelete>  
                                                        <App></App>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> 
                <div className="view-comment">

                    {/* <div>
                    { {list.map(
                            item => 
                                    <div>
                                        <div className="custom-table-item-20percents">{item.description}</div>
                                        <div className="custom-table-item-40percents">{item.reason}</div>
                                        <div className="custom-table-item-40percents">{item.description}</div>
                                    </div> 
                        )}
                    </div> } */}

                    {/* <div>
                        {list.slice(0,10).map(
                            item =>
                            
                                <div className="row jobseeker-comment">
                                    <div className="col avt-jobseeker">
                                        <img src="./img/avt1.jpg" alt="avt-jobseeker" />
                                    </div>
                                    <div className="col jobseeker-comment-main">
                                        <div className="row info-jobseeker-comment">
                                            <div className="col-comment jobseeker-name" >
                                                <a href="#" id="jobseeker-name">{item.jobSeekerName}</a>
                                            </div>
                                            <div className="col-comment edited-time" id="edited-time">
                                                Sửa đổi lần cuối 27/10/2020
                                            </div>
                                            <Rate value={item.starNumber} >

                                            </Rate>
                                            <div className="col-comment report">
                                                <a href="">Báo cáo vi pham</a>
                                            </div>
                                        </div>
                                        <div className="row jobseeker-title">
                                            <h2>{item.reason}</h2>
                                        </div>
                                        <div className="row jobseeker-comment-content">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>    

                        ) }
                    </div>  */}

                    {/* <Pagination defaultCurrent={1} total={list.length}  className="pagination" >

                    </Pagination> */}


                    <h2>{list.length} nhận xét</h2>
                    <List 
                        itemLayout="horizontal"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }} 
                        className="myPagination"
                        dataSource={list.filter(m=>m.starNumber!=null)} 
                        renderItem={item => (
                            
                            <List.Item 
                                
                                actions={[
                                    <div className="row jobseeker-comment">
                                    <div className="col avt-jobseeker">
                                        {/* <img src="./img/avt1.jpg" alt="avt-jobseeker" /> */}
                                        <Avatar size={50} src={item.image}/>
                                    </div>
                                    <div className="cmt-title" >
                                        <span className="recruiter-name"><a style={{color:"#5390F5"}}>{item.jobSeekerName}</a></span>
                                        <span>&nbsp;&nbsp;Sửa đổi lúc&nbsp;{item.lastModificationTime}</span>
                                        <span className="star"><Rate value={item.starNumber} disabled style={{color:"black",fontSize:15}}></Rate></span>
                                        <span className="report">Báo cáo vi phạm</span>
                                    </div> 
                                    <div className="row jobseeker-title">
                                    <h2>{item.reason}</h2>
                                    </div>
                                    <div className="row jobseeker-comment-content">
                                            <p>{item.description}</p>
                                    </div>
                                    </div> 
                                ]} 
                            >  
                            </List.Item>
                        )}
                    />

                </div>
            </div>
        )
    }

    handlerAddJobTypeConfirmation = () => {

        // let dto: CreateJobTypeInput =
        // {
        //     name: this.state.jobTypeName,
        //     displayName: this.state.jobTypeName,
        //     normalizedName: this.state.jobTypeName,
        //     description: this.state.jobTypeDesc,
        //     grantedPermissions: [
        //         ""
        //     ]
        // }
        // this.props.jobTypeStore.createJobType(dto);
        // this.setState({ isAddJobTypePopupOpen: false });
    }

    async getJobTypeByID() {
        // let dto: EntityDto = {
        //     id: this.state.selectedID
        // }
        // await this.props.jobTypeStore.getJobTypeByID(dto);
    }

    handlerVerifyEditJobTypeConfirmation = () => {

    }

    handlerVerifyDeleteJobTypeConfirmation = () => {
        // let dto: EntityDto = {
        //     id: this.state.selectedID
        // }
        // this.props.jobTypeStore.deleteJobType(dto);
        // this.setState({ isVerifyDeletePopupOpen: false });
    }

}
 






// onload = () => {
//     var item:ICommentItem ={
//         description:"",
//         id:1,
//         idJobSeeker:1,
//         image:"",
//         jobSeekerName:"",
//         lastModificationTime:null,
//         reason:"",
//         starNumber:-1,
//     }

//     list.forEach(m=>{
//         item =  (m.idJobSeeker==this.state.comment.IDJobSeeker)?m:item;
//     })

//     if(item.starNumber > 0)
//     {
//         this.setState({
//             comment: {
//                 Reason :item.reason,
//                 Description: item.description,
//                 StarNumber: item.starNumber,
//                 IDJobSeeker: this.state.comment.IDJobSeeker,
//                 IDRecruiter: this.state.comment.IDRecruiter,
//                 IsRecruiterWrite: this.state.comment.IsRecruiterWrite,
//                 }
//             })
//     }

// }