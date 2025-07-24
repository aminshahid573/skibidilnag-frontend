
import { SkibidiExample } from './types';

export const EXAMPLES: SkibidiExample[] = [
  {
    name: 'Hello Skibidi',
    code: `bruh Welcome to the new SkibidiLang!
skibidi name rizz "Skibidi" ohio
gyatt "Hello, " + name + " 🚽" ohio`
  },
  {
    name: 'Conditional Logic',
    code: `skibidi x rizz 10 ohio

cap (x > 5) {
   gyatt "x is big" ohio
}
nocap {
   gyatt "x is small" ohio
}`
  },
  {
    name: 'While Loop',
    code: `skibidi i rizz 0 ohio

bussin (i < 5) {
    gyatt "i is " + i ohio
    i rizz i + 1 ohio
}`
  },
  {
    name: 'For Loop',
    code: `gyatfor (skibidi i rizz 0; i < 5; i rizz i + 1) {
    gyatt "Counting: " + i ohio
}`
  },
  {
    name: 'Functions',
    code: `sigma add(a, b) {
    alpha a + b ohio
}

skibidi result rizz beta add(40, 2) ohio
gyatt "The answer is: " + result ohio`
  },
];
