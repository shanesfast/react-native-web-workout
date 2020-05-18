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
var RootStore_1 = require("../store/RootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "rgb(222, 237, 250)",
        padding: 10
    }
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function (_a) {
    var rootStore = react_1.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, rootStore.workoutStore.currentExcercises.map(function (e) {
        return (react_1.default.createElement(WorkoutCard_1.WorkoutCard, { key: e.excercise, onSetPress: function (setIndex) {
                var v = e.sets[setIndex];
                var newValue;
                if (v === '')
                    newValue = "" + e.reps;
                else if (v === '0')
                    newValue = '';
                else
                    newValue = "" + (parseInt(v) - 1);
                e.sets[setIndex] = newValue;
            }, sets: e.sets, excercise: e.excercise, repsAndWeight: e.numSets + "x" + e.reps + " " + e.weight }));
    })));
});
