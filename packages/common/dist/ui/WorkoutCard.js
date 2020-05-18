"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "column",
        padding: 10,
        marginBottom: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    circle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        backgroundColor: "#418BCC",
        borderRadius: 25,
    },
    whiteFont: {
        color: '#fff'
    },
    circleFont: {
        fontSize: 15
    },
    grayBG: {
        backgroundColor: "#4F6980"
    },
    grayFont: {
        color: "#DEEDFA"
    }
});
exports.WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var excercise = _a.excercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets, onSetPress = _a.onSetPress;
    return (react_1.default.createElement(react_native_1.View, { style: styles.card },
        react_1.default.createElement(react_native_1.View, { style: styles.topRow },
            react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, excercise),
            react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
        react_1.default.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === 'x')
                return (react_1.default.createElement(react_native_1.View, { key: set + index, style: [styles.circle, styles.grayBG] },
                    react_1.default.createElement(react_native_1.Text, { style: styles.grayFont }, "X")));
            if (set === '')
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.circle, styles.grayBG], onPress: function () { return onSetPress(index); } }));
            return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: set + index, style: styles.circle, onPress: function () { return onSetPress(index); } },
                react_1.default.createElement(react_native_1.Text, { style: styles.whiteFont }, set)));
        }))));
});
