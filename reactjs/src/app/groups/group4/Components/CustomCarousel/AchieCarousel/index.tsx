import { Button, Carousel, Icon } from 'antd'
import './index.less'
import React, { createRef } from 'react'
import { DataConsumer } from 'app/groups/group4/scenes/ListCV/ListCV';
// import { DataConsumer } from 'app/groups/group4/scenes/ListCV/ListCV';

export interface IHeaderProps {
    collapsed?: any;
    toggle?: any;
}

export class AchieCarousel extends React.Component {
    carousel: React.RefObject<any>;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.carousel = createRef();
      }

    handleNext = () => this.carousel.current.next();

    handlePrev = () => this.carousel.current.prev();

    render() {
        return(
            <div className="achievement">
                <div className="achie-header">
                <p>Thành tựu</p>
                    <div className="achie-btn">
                        <Button onClick={this.handlePrev}><Icon type="left" /></Button>
                        <Button onClick={this.handleNext}><Icon type="right" /></Button>
                    </div>
                </div>

                <Carousel dots={false} arrows={true} ref={this.carousel}>
                    <div className="achie-1">
                        <label htmlFor="">Tên (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='name' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Tổ chức (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='organization' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Thời gian (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Nội dung (1/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <textarea name="content" id="" rows={3} maxLength={1000}
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',0, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        {/* <textarea name="" id="" rows={3} maxLength={1000}></textarea> */}
                    </div>

                    <div className="achie-2">
                    <label htmlFor="">Tên (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='name' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Tổ chức (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='organization' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Thời gian (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Nội dung (2/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <textarea name="content" id="" rows={3} maxLength={1000}
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',1, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                    </div>

                    <div className="achie-3">
                    <label htmlFor="">Tên (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='name' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Tổ chức (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='organization' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Thời gian (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <input name ='period' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                        <label htmlFor="">Nội dung (3/3)</label>
                        <DataConsumer>
                                { ({updateInputArray}) => (
                                    <textarea name="content" id="" rows={3} maxLength={1000}
                                    onChange={(event) => {
                                        updateInputArray('achievementDetails',2, event.target);
                                    }}/>
                                ) }    
                        </DataConsumer>
                    </div>
                </Carousel>

            </div>
        );
    }
};

export default AchieCarousel;