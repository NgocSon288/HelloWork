import RoleStore from 'shared/stores/roleStore';
import TenantStore from 'shared/stores/tenantStore';
import UserStore from 'shared/stores/userStore';
import SessionStore from 'shared/stores/sessionStore';
import AuthenticationStore from 'shared/stores/authenticationStore';
import AccountStore from 'shared/stores//accountStore';

import CVStore from 'app/groups/group4/stores/CVStore'


//import from groups
import UserGroup10Store from 'app/groups/group10/stores/userGroup10Store';

import RecruitmentsStore from 'app/groups/group6/stores/recruitmentsStore';
import ExpertisesStore from 'app/groups/group6/stores/expertisesStore';
import recruitmentPostStore from 'app/groups/group9/stores/recruitmentPostStore';

//import from group5
import jobSeekerStore from 'app/groups/group5/stores/jobSeekerStore';
import achievementStore from 'app/groups/group5/stores/achievementStore';
import educationStore from 'app/groups/group5/stores/educationStore';
import experienceStore from 'app/groups/group5/stores/experienceStore';
import orientationStore from 'app/groups/group5/stores/orientationStore';
import reviewStore from 'app/groups/group5/stores/reviewStore';
import skillStore from 'app/groups/group5/stores/skillStore';
import stateApplicationStore from 'app/groups/group5/stores/stateApplicationStore';
//import from group1
import CompanyInfoStore from 'app/groups/group1/stores/CompanyInfoStore';
import InterviewStore from 'app/groups/group1/stores/InterviewStore';
import StateApplicantStore from 'app/groups/group1/stores/StateApplicantStore';
import ServiceRegisterStore from 'app/groups/group7/stores/serviceRegister.store';
import ServiceStore from 'app/groups/group7/stores/service.store';
import CommentStore from 'app/groups/group8/stores/CommentStore';
import ApproveServiceStore from 'app/groups/group7/stores/ApproveServiceStore';

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),

    //groups
    //jobTypeStore: new JobtypeStore(),

    cvStore: new CVStore(),



    // group10
    userGroup10Store: new UserGroup10Store(),


    //group5
    jobSeekerStore: new jobSeekerStore(),
    achievementStore: new achievementStore(),
    educationStore: new educationStore(),
    experienceStore: new experienceStore(),
    orientationStore: new orientationStore(),
    reviewStore: new reviewStore(),
    skillStore: new skillStore(),
    stateApplicationStore: new stateApplicationStore(),

    //group 1
    CompanyInfoStore: new CompanyInfoStore(),
    StateApplicantStore: new StateApplicantStore(),
    InterviewStore: new InterviewStore(),
    //group 2

    //group 3

    //group 4

    //group 5

    //group 6
    recruitmentsStore: new RecruitmentsStore(),
    expertisesStore: new ExpertisesStore(),
    //group 7
    serviceStore: new ServiceStore(),
    serviceRegisterStore: new ServiceRegisterStore(),
    approveServiceStore: new ApproveServiceStore(),
    //group 8
    commentStore: new CommentStore(),

    //group 9
    recruitmentPostStore: new recruitmentPostStore(),
    //group 10

    //group 11

    //group 12

    //group 13

    //group 14






  };
}