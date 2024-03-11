// Union Types
function padLeft(value: string, padding: string | number) {
  console.log(padding);
}

padLeft("string", 3);
padLeft("string", "string2");

// Intersection Types
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

export type Customer = BusinessPartner & Contact;

const customer: Customer = {
  email: "mail@test.com",
  phone: "0984727323",
  name: "test",
  credit: 33,
};

export const intersectionArgFunction = (customer: Customer) => {
  console.log(customer.email);
};
