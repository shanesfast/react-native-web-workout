"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        margin: 10
    }
});
exports.CurrentWorkout = function (_a) {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(WorkoutCard_1.WorkoutCard, { sets: ['5', '', '5', 'x', '5'], excercise: "Squat", repsAndWeight: "5x5 260" })));
};
