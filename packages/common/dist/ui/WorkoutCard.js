"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        padding: 10
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
        height: 30,
        width: 30,
        backgroundColor: "#418BCC",
        borderRadius: 15,
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
exports.WorkoutCard = function (_a) {
    var excercise = _a.excercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets;
    return (react_1.default.createElement(react_native_1.View, { style: styles.card },
        react_1.default.createElement(react_native_1.View, { style: styles.topRow },
            react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, excercise),
            react_1.default.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
        react_1.default.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === 'x')
                return (react_1.default.createElement(react_native_1.View, { key: set + index, style: [styles.circle, styles.grayBG] },
                    react_1.default.createElement(react_native_1.Text, { style: styles.grayFont }, "X")));
            if (set === '')
                return (react_1.default.createElement(react_native_1.View, { style: [styles.circle, styles.grayBG] }));
            return (react_1.default.createElement(react_native_1.View, { key: set + index, style: styles.circle },
                react_1.default.createElement(react_native_1.Text, { style: styles.whiteFont }, set)));
        }))));
};
