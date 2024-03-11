// Defining interfaces
interface Vehicule {
  make: string;
  model: string;
  year?: number;
}

const createVehicule = (arg1: Vehicule): Vehicule => {
  return arg1;
};

// Optional props
interface CustomPerson {
  firstName: string;
  lastName: string;
  age?: number;
  email?: string;
}

interface UpdatedPerson {
  firstName?: string;
  lastName?: string;
  age?: number;
  email?: string;
}

const updatePerson = (
  person: CustomPerson,
  updates: UpdatedPerson
): CustomPerson => {
  return { ...person, ...updates };
};

// ReadOnly Props
interface Circle {
  readonly centerx: number;
  readonly centery: number;
  readonly radius: number;
}
interface UpdatedCircle {
  centerx?: number;
  centery?: number;
  radius?: number;
}

const moveCircle = (circle: Circle, updates: UpdatedCircle): Circle => {
  circle = { ...circle, ...updates };
  return circle;
};
