import { Customer, intersectionArgFunction } from "../advancedTypes";
import { expect, test } from "@jest/globals";

const customer: Customer = {
  email: "mail@test.com",
  phone: "0984727323",
  name: "test",
  credit: 33,
};
test("intersectionArgFunction", () => {
  expect(intersectionArgFunction(customer)).toBe(undefined);
});
