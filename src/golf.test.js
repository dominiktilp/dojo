// import giveMeScore from './index'; // default import
import { giveMeScore } from './golf'; // named import

test('invalid input - string', () => {
  const expectedHits = '5';
  const actualHits = 5;
  expect(() => {
    giveMeScore(expectedHits, actualHits);
  }).toThrowError('wrong input');
});

test('invalid input - negative', () => {
  const expectedHits = 1;
  const actualHits = 0;
  expect(() => {
    giveMeScore(expectedHits, actualHits);
  }).toThrowError('wrong input');
});

test('PAR when expectedHits = actualHits', () => {
  const expectedHits = 5;
  const actualHits = 5;
  const result = giveMeScore(expectedHits, actualHits);
  expect(result).toBe('par');
});

// test('not a PAR when expectedHits = actualHits', () => {
//   const expectedHits = 5;
//   const actualHits = 4;
//   const result = giveMeScore(expectedHits, actualHits);
//   expect(result).toBe(null);
// });

test('1-UNDER-PAR when expectedHits = actualHits+1', () => {
  const expectedHits = 5;
  const actualHits = 4;
  const result = giveMeScore(expectedHits, actualHits);
  expect(result).toBe('1-under-par');
});

test('2-UNDER-PAR when expectedHits = actualHits+2', () => {
  const expectedHits = 5;
  const actualHits = 3;
  const result = giveMeScore(expectedHits, actualHits);
  expect(result).toBe('2-under-par');
});
