"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var react_1 = require("react");
var RoutesStore = /** @class */ (function () {
    function RoutesStore() {
        this.screen = "CurrentWorkout";
    }
    __decorate([
        mobx_1.observable
    ], RoutesStore.prototype, "screen", void 0);
    return RoutesStore;
}());
exports.RoutesStoreContext = react_1.createContext(new RoutesStore());
