// named export
export function giveMeScore(expectedHits, actualHits) {
  if (!(typeof expectedHits === 'number' && typeof actualHits === 'number')) {
    throw new Error('wrong input');
  }
  if (expectedHits <= 1 || actualHits <= 1) {
    throw new Error('wrong input');
  }
  if (expectedHits === actualHits) {
    return 'par';
  }
  if (expectedHits > actualHits) {
    const result = expectedHits - actualHits;
    return `${result}-under-par`;
  }
  return null;
}


// default export
export default giveMeScore;
