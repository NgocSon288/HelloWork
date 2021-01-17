import React from 'react'
import '../../styles.less'
import { inject, observer } from 'mobx-react';
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import StateApplicationStore from "../../stores/stateApplicationStore"
export interface IStateApplicationListProps {
    sateApplicationStore: StateApplicationStore;
}

export interface IStateApplicationListState {
    sate : string;
    idJobSeeker : number,
    idRecruitment : number,
    modalVisible: boolean;
    selectedID: number;
    isAnyItemClicked: boolean;
    isAddJobSeekerPopupOpen: boolean;
    jobSeekerName: string,
    jobSeekerDesc: string,
    isEditJobSeekerPopupOpen: boolean,
    isVerifyDeletePopupOpen: boolean,
}

@inject(Stores.stateApplicationStore)
@observer
export default class SateApplication extends AppComponentBase<IStateApplicationListProps, IStateApplicationListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            sate : "CHUA_UNG_TUYEN",
            idJobSeeker : 1,
            idRecruitment : 1,
            modalVisible: false,
            selectedID: 1,
            isAnyItemClicked: false,
            isAddJobSeekerPopupOpen: false,
            jobSeekerName: "",
            jobSeekerDesc: "",
            isEditJobSeekerPopupOpen: false,
            isVerifyDeletePopupOpen: false,
        }

    }

    //Sanh code
    async componentDidMount() {
        // const input : GetStateApplicationByJSInput = {
        //     IDJobSeeker: this.state.idJobSeeker,
        //     IDRecuitment: this.state.idRecruitment,
        // }
        // if (this.props.sateApplicationStore === undefined)
        //     return;
        // await this.props.sateApplicationStore.getStateApplicationByJobSeekerRecuitment(input);
    }


    public render() {
        // if (this.props.sateApplicationStore === undefined)
        //     return (<div></div>)

        const {stateApplication} = this.props.sateApplicationStore;
        
        if (stateApplication === undefined) 
            return (<div></div >)

        return (
            <div>

            </div>
        );
    }
}