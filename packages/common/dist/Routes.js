"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importStar(require("react"));
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var RoutesStore_1 = require("./store/RoutesStore");
exports.Routes = mobx_react_lite_1.observer(function () {
    var routesStore = react_1.useContext(RoutesStore_1.RoutesStoreContext);
    return routesStore.screen === 'WorkoutHistory' ? react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, null) : react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null);
});
