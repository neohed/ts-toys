type A = 'A';
type B = 'B';

type M1 = keyof (A | B);
type N1 = keyof (A & B);

type X = {
    id: number;
    name: string;
}
type Y = {
    id: number;
    age: number;
}

type M2 = keyof (X | Y);
type M2_ = (keyof X) & (keyof Y);
type N2 = keyof (X & Y);
type N2_ = (keyof X) | (keyof Y);

interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
}

type P = keyof Person;
type L = keyof Lifespan;
type PL_union = string | number; // Something can be either string OR number, but...
type PL_intersect = string & number; // nothing can be both a string AND a number.
type PL = keyof (Person & Lifespan);
type PL_ = keyof (Person | Lifespan);
