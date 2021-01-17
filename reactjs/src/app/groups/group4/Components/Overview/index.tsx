import './index.less'
import React from 'react'
import {DataConsumer} from '../../scenes/ListCV/ListCV'

export interface IHeaderProps {
    collapsed?: any;
    toggle?: any;
}

interface OverviewProps {}
interface OverviewState {
    name: string,
    bio: string
}

export class Overview extends React.Component <OverviewProps, OverviewState> {
    render() {
        return(
                        <div className="overview-template">
                            <p>Tổng quan</p>
                            <label htmlFor="">Tên</label>
                            <DataConsumer>
                                { ({updateInput}) => (
                                    <input name ='name' type="text" maxLength={50}  
                                    onChange={(event) => {
                                        updateInput(event.target);
                                    }}/>
                                ) }    
                            </DataConsumer>
                            
                            <label htmlFor="">Giới thiệu</label>

                            <DataConsumer>
                                { ({updateInput}) => (
                                    <textarea name="bio" id="" rows={5} maxLength={255} 
                                    onChange={(event) => {
                                        updateInput(event.target);
                                    }} 
                                    >
                                    </textarea>
                                ) }    
                            </DataConsumer>
                        </div>
        );
    }
};

export default Overview;