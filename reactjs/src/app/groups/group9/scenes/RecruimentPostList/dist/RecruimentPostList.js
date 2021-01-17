"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("../../styles.less");
require("./RecruimentPostList.less");
var mobx_react_1 = require("mobx-react");
var core_1 = require("@material-ui/core");
var CustomModal_1 = require("app/shared/components/CustomModal/CustomModal");
var AppComponentBase_1 = require("app/shared/components/AppComponentBase");
var storeIdentifier_1 = require("app/shared/stores/storeIdentifier");
var RecruimentPostList = /** @class */ (function (_super) {
    __extends(RecruimentPostList, _super);
    function RecruimentPostList(props) {
        var _this = _super.call(this, props) || this;
        _this.Modal = function () {
            _this.setState({
                modalVisible: !_this.state.modalVisible
            });
        };
        _this.handleCreate = function () {
            _this.setState({ isAddRCPopupOpen: true });
        };
        _this.handleDelete = function () {
        };
        _this.closeAllSelectedItem = function () {
        };
        _this.handleEdit = function () {
        };
        _this.handleItemClicked = function (id) {
            var all_item = document.getElementsByClassName("custom-table-line-activated");
            for (var i = 0; i < all_item.length; i++) {
                all_item[i].className = "custom-table-line";
            }
            var selected_item = document.getElementById("recruitment-post-list-item-" + id);
            selected_item.className = "custom-table-line-activated";
            _this.setState({
                isAnyItemClicked: true, selectedID: id
            });
        };
        _this.handlerAddJobTypeConfirmation = function () {
            // let dto: CreateJobTypeInput =
            // {
            //     name: this.state.jobTypeName,
            //     displayName: this.state.jobTypeName,
            //     normalizedName: this.state.jobTypeName,
            //     description: this.state.jobTypeDesc,
            //     grantedPermissions: [
            //         ""
            //     ]
            // }
            // this.props.jobTypeStore.createJobType(dto);
            // this.setState({ isAddJobTypePopupOpen: false });
        };
        _this.handlerVerifyEditRecruitmentPostConfirmation = function () {
        };
        _this.handlerVerifyDeleteJobTypeConfirmation = function () {
            // let dto: EntityDto = {
            //     id: this.state.selectedID
            // }
            // this.props.jobTypeStore.deleteJobType(dto);
            // this.setState({ isVerifyDeletePopupOpen: false });
        };
        _this.state = {
            modalVisible: false,
            selectedID: 0,
            isAnyItemClicked: false,
            isAddRCPopupOpen: false,
            RCPPostName: "",
            RCPDesc: "",
            isEditRCPPopupOpen: false,
            isVerifyDeletePopupOpen: false
        };
        return _this;
    }
    RecruimentPostList.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecruimentPostList.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.recruitmentPostStore.getAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //     orderIndex: number,
    //   specialize: string,
    //   formOfWork : string,
    //   position : string,
    //   status : string,
    //   candidate : number,
    //   creationTime: any,
    //   id: number
    RecruimentPostList.prototype.render = function () {
        var _this = this;
        var recruitmentPosts = this.props.recruitmentPostStore.recruitmentPosts;
        if (recruitmentPosts === undefined)
            return (react_1["default"].createElement("div", null));
        var list;
        list = recruitmentPosts.items;
        return (react_1["default"].createElement("div", { style: { margin: "auto", marginTop: "20px", width: "60%" } },
            react_1["default"].createElement("div", { className: "custom-table-layout", style: { paddingBottom: "10px" } },
                react_1["default"].createElement("div", { className: "custom-table-header" },
                    react_1["default"].createElement("div", { className: "custom-table-20percents-header" }, "M\u00E3"),
                    react_1["default"].createElement("div", { className: "custom-table-40percents-header" }, "T\u00EAn"),
                    react_1["default"].createElement("div", { className: "custom-table-40percents-header" }, "M\u00F4 t\u1EA3")),
                react_1["default"].createElement("div", null, list.map(function (item) {
                    return react_1["default"].createElement(core_1.ClickAwayListener, { onClickAway: function () { _this.closeAllSelectedItem(); } },
                        react_1["default"].createElement("div", { className: "custom-table-line", key: item.id, style: { display: "flex" }, id: 'recruitment-post-list-item-' + item.id, onClick: function () { return _this.handleItemClicked(item.id); } },
                            react_1["default"].createElement("div", { className: "custom-table-item-20percents" }, item.id),
                            react_1["default"].createElement("div", { className: "custom-table-item-40percents" }, item.name),
                            react_1["default"].createElement("div", { className: "custom-table-item-40percents" }, item.state)));
                }))),
            react_1["default"].createElement("div", { className: "Buttons_Layout" },
                this.isGranted('Pages.Group9.RecruitmentPost.Create') && react_1["default"].createElement("button", { type: "button", className: "Simple_Blue_Button margin_right_5px", onClick: function () { return _this.handleCreate(); } }, "Th\u00EAm"),
                this.isGranted('Pages.Group9.RecruitmentPost.Update') && react_1["default"].createElement("button", { type: "button", className: "Simple_White_Button margin_right_5px", disabled: true, onClick: function () { return _this.setState({ isEditRCPPopupOpen: true }); } }, "S\u1EEDa"),
                this.isGranted('Pages.Group9.RecruitmentPost.Delete') && react_1["default"].createElement("button", { type: "button", className: "Simple_Red_Button", disabled: !this.state.isAnyItemClicked, onClick: function () { return _this.setState({ isVerifyDeletePopupOpen: true }); } }, "X\u00F3a")),
            react_1["default"].createElement(CustomModal_1["default"], { shadow: true, type: "custom", title: "Th\u00EAm lo\u1EA1i c\u00F4ng vi\u1EC7c", open: this.state.isAddRCPopupOpen, closeModal: function () { _this.setState({ isAddRCPopupOpen: false }); } },
                react_1["default"].createElement("div", { className: "Custom_Modal_Body" },
                    react_1["default"].createElement("div", null)),
                react_1["default"].createElement("div", { className: "Custom_Modal_Footer" },
                    react_1["default"].createElement("div", { className: "Simple_Gray_Label" }, "X\u00E1c nh\u1EADn?"),
                    react_1["default"].createElement("div", { style: { display: "flex" } }))),
            react_1["default"].createElement(CustomModal_1["default"], { shadow: true, type: "custom", title: "C\u1EADp nh\u1EADt lo\u1EA1i c\u00F4ng vi\u1EC7c", open: this.state.isEditRCPPopupOpen, closeModal: function () { _this.setState({ isEditRCPPopupOpen: false }); } },
                react_1["default"].createElement("div", { className: "Custom_Modal_Body" }),
                react_1["default"].createElement("div", { className: "Custom_Modal_Footer" },
                    react_1["default"].createElement("div", { className: "Simple_Gray_Label" }, "X\u00E1c nh\u1EADn?"))),
            react_1["default"].createElement(CustomModal_1["default"], { shadow: true, type: "confirmation", title: "Xác nhận", text: "Bạn có muốn xóa loại công việc này?", open: this.state.isVerifyDeletePopupOpen, closeModal: function () { _this.setState({ isVerifyDeletePopupOpen: false }); } },
                react_1["default"].createElement("button", { className: "Simple_Blue_Button margin_right_5px", onClick: function () { return _this.handlerVerifyDeleteJobTypeConfirmation(); } }, "OK"),
                react_1["default"].createElement("button", { className: "Simple_White_Button", onClick: function () { _this.setState({ isVerifyDeletePopupOpen: false }); } }, "Cancel"))));
    };
    RecruimentPostList.prototype.getRecruitmentByID = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RecruimentPostList = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].recruitmentPostStore),
        mobx_react_1.observer
    ], RecruimentPostList);
    return RecruimentPostList;
}(AppComponentBase_1["default"]));
exports["default"] = RecruimentPostList;
