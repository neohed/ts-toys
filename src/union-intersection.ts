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
