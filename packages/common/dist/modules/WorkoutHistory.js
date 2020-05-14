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
var react_native_1 = require("react-native");
var RoutesStore_1 = require("../store/RoutesStore");
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var routesStore = react_1.useContext(RoutesStore_1.RoutesStoreContext);
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, "Workout History Page"),
        react_1.default.createElement(react_native_1.Button, { title: "Create Workout", onPress: function () { routesStore.screen = 'CurrentWorkout'; } })));
});
