import { giveMeScore } from './golf';

const expectedHits = parseInt(process.argv[2], 10);
const actualHits = parseInt(process.argv[3], 10);

console.log(`Counting score for ${expectedHits}, ${actualHits}`);
console.log(`Result is ${giveMeScore(expectedHits, actualHits)}`);
