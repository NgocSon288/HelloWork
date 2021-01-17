"use strict";
exports.__esModule = true;
var roleStore_1 = require("shared/stores/roleStore");
var tenantStore_1 = require("shared/stores/tenantStore");
var userStore_1 = require("shared/stores/userStore");
var sessionStore_1 = require("shared/stores/sessionStore");
var authenticationStore_1 = require("shared/stores/authenticationStore");
var accountStore_1 = require("shared/stores//accountStore");
//import from groups

var recruitmentPostStore_1 = require("app/groups/group9/stores/recruitmentPostStore");
//group1
var CompanyInfoStore_1 =require('app/groups/group1/stores/CompanyInfoStore');
var InterviewStore_1=require('app/groups/group1/stores/InterviewStore');
var StateApplicantStore_1=require('app/groups/group1/stores/StateApplicantStore');
function initializeStores() {
    return {
        authenticationStore: new authenticationStore_1["default"](),
        roleStore: new roleStore_1["default"](),
        tenantStore: new tenantStore_1["default"](),
        userStore: new userStore_1["default"](),
        sessionStore: new sessionStore_1["default"](),
        accountStore: new accountStore_1["default"](),
        //groups
        jobTypeStore: new jobTypeStore_1["default"](),
        recruitmentPostStore: new recruitmentPostStore_1["default"](),
        //group1
        CompanyInfoStore: new CompanyInfoStore_1["default"](),
        InterviewStore: new InterviewStore_1["default"](),
        StateApplicantStore: new StateApplicantStore_1["default"](),
    };
}
exports["default"] = initializeStores;
