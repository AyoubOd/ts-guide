"use strict";
// number, string, boolean
let temperature = 3.3;
let welcomeString = "welcome";
let isLoggedIn = true;
// Arrays, Tuples
let colors = ["blue", "red"];
let userInfo = ["ayoub", 22];
// Enum, Any, Void, Null, and Undefined
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autum"] = 2] = "Autum";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
let s = Season.Winter;
const logValue = (something) => {
    console.log(something);
};
const noReturn = () => {
    console.log("No return.");
};
