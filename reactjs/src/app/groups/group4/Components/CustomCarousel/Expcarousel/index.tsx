import { Button, Carousel, Icon } from 'antd'
import './index.less'
import React, { createRef } from 'react'
import { DataConsumer } from 'app/groups/group4/scenes/ListCV/ListCV';
// import {DataConsumer} from 'app/groups/group4/scenes/ListCV'

export interface IHeaderProps {
    collapsed?: any;
    toggle?: any;
}

export class ExpCarousel extends React.Component {
    carousel: React.RefObject<any>;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.carousel = createRef();
      }

    handleNext = () => this.carousel.current.next();

    handlePrev = () => this.carousel.current.prev();

    render() {
        return(
            <div className="experience">
                <div className="exp-header">
                    <p>Kinh nghiệm làm việc</p>
                    <div className="exp-btn">
                        <Button onClick={this.handlePrev}><Icon type="left" /></Button>
                        <Button onClick={this.handleNext}><Icon type="right" /></Button>
                    </div>
                </div>

                <Carousel dots={false} arrows={true} style={{background: '#f0f2f5'}} ref={this.carousel}>
                    <div className="exp-1" style={{background: "#000"}}>
                        <label htmlFor="">Tên công việc (1/3) </label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='jobName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 0 , event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Tên công ty (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='companyName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 0 , event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Khoảng thời gian (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 0 , event.target);
                                    }}/> 
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Vị trí công việc (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='jobPosition' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 0 , event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Nội dung (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <textarea name="content" rows={3} maxLength={1000}
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        {/* <textarea name="" id="" rows={3} maxLength={1000}></textarea> */}
                    </div>

                    <div className="exp-2">
                    <label htmlFor="">Tên công việc (2/3) </label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='jobName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Tên công ty (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='companyName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Khoảng thời gian (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Vị trí công việc (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='jobPosition' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Nội dung (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <textarea name="content" rows={3} maxLength={1000}
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        {/* <textarea name="" id="" rows={3} maxLength={1000}></textarea> */}
                    </div>

                    <div className="exp-3">
                    <label htmlFor="">Tên công việc (3/3) </label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='jobName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Tên công ty (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='companyName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Khoảng thời gian (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Vị trí công việc (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='jobPosition' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Nội dung (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <textarea name="content" rows={3} maxLength={1000}
                                    onChange={(event) => {
                                        updateInputArray('experienceDetails', 2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        {/* <textarea name="" id="" rows={3} maxLength={1000}></textarea> */}
                    </div>
                </Carousel>

            </div>
        );
    }
};

export default ExpCarousel;