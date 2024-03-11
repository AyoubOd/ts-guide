"use strict";
// Numeric Enums
var CustomResponse;
(function (CustomResponse) {
    CustomResponse[CustomResponse["Yes"] = 1] = "Yes";
    CustomResponse[CustomResponse["No"] = 0] = "No";
})(CustomResponse || (CustomResponse = {}));
const test = (arg) => {
    const resp = arg;
};
// String Enums
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
const returnEnum = () => {
    return Message.Success;
};
