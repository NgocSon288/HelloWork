import './index.less'
import React from 'react'

export interface IHeaderProps {
    collapsed?: any;
    toggle?: any;
}

export class Option extends React.Component {
    render() {
        return(
            <div className="input-template">
                <div id="option-1">
                    <input type="image" id="option1" value="standard-option"/><br/>
                    <label htmlFor="option1">Cơ bản</label>
                </div>

                <div id="option-2">
                    <input type="image" id="option2" value="english-option"/><br/>
                    <label htmlFor="option2">Cơ bản(Tiếng Anh)</label>
                </div>
            </div>
        );
    }
};

export default Option;