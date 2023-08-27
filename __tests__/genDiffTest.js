import { test, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/genDiff.js';

const filePath1 = path.resolve(__dirname, '__tests__/__fixtures__/file1.json');
const filePath2 = path.resolve(__dirname, '__tests__/__fixtures__/file2.json');

test('genDiff() compares two JSON files and produces the expected result', () => {
  const expectedDiff = `{
      - follow: false
        host: hexlet.io
      - proxy: 123.234.53.22
      - timeout: 50
      + timeout: 20
      + verbose: true 
    }`;
  expect(genDiff(filePath1, filePath2)).toEqual(expectedDiff);
});
