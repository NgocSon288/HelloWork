import React from 'react';
import './Name_Slogan.less'

const Name_Slogan=(props:any)=> {
   
        return (
            <div>
                <div className="Name_Slogan">
                    <div className="Company_Address">
                        <img height="50" width="50" src="https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png" />
                    {props.Location}
                    </div>
                    <div className="Company_Name">
                        {props.Name}
                    </div>
                    <div className="Company_Slogan">
                        {props.slogan}
                    </div>
                    <div className="Avatar">
                        <img className="Avatar" src="https://freedesignfile.com/upload/2019/10/Fox-mascot-logo-vector-design.jpg" alt="" />
                    </div>

                </div>
            </div>
        )
}
export default Name_Slogan;