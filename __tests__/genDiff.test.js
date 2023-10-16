import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const expectedDiff = fs.readFileSync(path.resolve(dirname, '__fixtures__/expectedData'), 'utf-8');
const expectedNestedDiff = fs.readFileSync(path.resolve(dirname, '__fixtures__/expectedNestedData'), 'utf-8');
const expectedPlainDiff = fs.readFileSync(path.resolve(dirname, '__fixtures__/expectedPlainData'), 'utf-8');
const expectedJsonDiff = fs.readFileSync(path.resolve(dirname, '__fixtures__/expectedJsonData'), 'utf-8');

test.each([
  ['file1.json', 'file2.json', expectedDiff],
  ['file1.yml', 'file2.yml', expectedDiff],
  ['fileWithNesting1.json', 'fileWithNesting2.json', expectedNestedDiff],
  ['fileWithNesting1.yaml', 'fileWithNesting2.yaml', expectedNestedDiff],
  ['fileWithNesting1.json', 'fileWithNesting2.json', expectedPlainDiff, 'plain'],
  ['fileWithNesting1.yaml', 'fileWithNesting2.yaml', expectedPlainDiff, 'plain'],
  ['fileWithNesting1.json', 'fileWithNesting2.json', expectedJsonDiff, 'json'],
  ['fileWithNesting1.yaml', 'fileWithNesting2.yaml', expectedJsonDiff, 'json'],
])(
  'genDiff() compares two %s and %s and produces the expected result',
  (file1, file2, expected, format = 'stylish') => {
    const filePath1 = path.resolve(dirname, `__fixtures__/${file1}`);
    const filePath2 = path.resolve(dirname, `__fixtures__/${file2}`);
    expect(genDiff(filePath1, filePath2, format)).toEqual(expected);
  },
);
