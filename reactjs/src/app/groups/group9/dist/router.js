"use strict";
exports.__esModule = true;
var Loadable_1 = require("app/shared/components/Loadable"); //khi nao chinh lai thi bo comment
//tham khao cua nhom 1 và tien hanh voi router khac nha
var Group9NavbarRouter = [
    {
        path: '/recruimentPosts',
        exact: true,
        name: 'recruitmemt-post',
        permissions: [],
        isAny: true,
        title: 'Tin tuyển dụng',
        component: Loadable_1["default"](function () { return Promise.resolve().then(function () { return require('./scenes/RecruimentPostList/RecruimentPostList'); }); }),
        showInNavbar: "left",
        hideWithoutPermission: false
    }
];
exports["default"] = Group9NavbarRouter;
