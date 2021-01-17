import { Button, Carousel, Icon } from 'antd'
import './index.less'
import React, { createRef } from 'react'
import { DataConsumer } from 'app/groups/group4/scenes/ListCV/ListCV';


export interface IHeaderProps {
    collapsed?: any;
    toggle?: any;
}

export class EduCarousel extends React.Component {
    carousel: React.RefObject<any>;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.carousel = createRef();
      }

    handleNext = () => this.carousel.current.next();

    handlePrev = () => this.carousel.current.prev();

    render() {
        return(
            <div className="education">
                <div className="edu-header">
                <p>Học vấn</p>
                    <div className="edu-btn">
                        <Button onClick={this.handlePrev}><Icon type="left" /></Button>
                        <Button onClick={this.handleNext}><Icon type="right" /></Button>
                    </div>
                </div>

                <Carousel dots={false} arrows={true} style={{background: '#f0f2f5'}} ref={this.carousel}>
                    <div className="edu-1">
                        <label htmlFor="">Nơi học (1/2)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='schoolName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('educationDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Khoảng thời gian (1/2)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('educationDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Chuyển môn (1/2)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='specialize' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('educationDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                    </div>

                    <div className="edu-2">
                    <label htmlFor="">Nơi học (2/2)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='schoolName' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('educationDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Khoảng thời gian (2/2)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('educationDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Chuyển môn (2/2)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='specialize' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('educationDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                    </div>
                </Carousel>

            </div>
        );
    }
};

export default EduCarousel;