// Numeric Enums
enum CustomResponse {
  Yes = 1,
  No = 0,
}

const test = (arg: CustomResponse): void => {
  const resp = arg;
};

// String Enums
enum Message {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

const returnEnum = (): Message => {
  return Message.Success;
};
