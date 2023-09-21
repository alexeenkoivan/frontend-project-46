import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const filePath1 = path.resolve(dirname, '__fixtures__/file1.json');
const filePath2 = path.resolve(dirname, '__fixtures__/file2.json');

test('genDiff() compares two JSON files and produces the expected result', () => {
  const expectedDiff = fs.readFileSync(path.resolve(dirname, '__fixtures__/expectedJsonFormat'), 'utf-8');
  expect(genDiff(filePath1, filePath2)).toEqual(expectedDiff);
});

test('genDiff() compares two YAML files and produces the expected result', () => {
  const expectedDiff = fs.readFileSync(path.resolve(dirname, '__fixtures__/expectedYamlFormat'), 'utf-8');
  const yamlFilePath1 = path.resolve(dirname, '__fixtures__/file1.yml');
  const yamlFilePath2 = path.resolve(dirname, '__fixtures__/file2.yml');
  expect(genDiff(yamlFilePath1, yamlFilePath2)).toEqual(expectedDiff);
});
