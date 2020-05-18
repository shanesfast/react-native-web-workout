"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RoutesStore_1 = require("./RoutesStore");
var WorkoutStore_1 = require("./WorkoutStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.routesStore = new RoutesStore_1.RoutesStore(this);
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
