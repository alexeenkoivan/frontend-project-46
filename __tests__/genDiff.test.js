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

test('genDiff() compares two JSON files and produces the expected result', () => {
  const jsonFilePath1 = path.resolve(dirname, '__fixtures__/file1.json');
  const jsonFilePath2 = path.resolve(dirname, '__fixtures__/file2.json');
  expect(genDiff(jsonFilePath1, jsonFilePath2)).toEqual(expectedDiff);
});

test('genDiff() compares two YAML files and produces the expected result', () => {
  const yamlFilePath1 = path.resolve(dirname, '__fixtures__/file1.yml');
  const yamlFilePath2 = path.resolve(dirname, '__fixtures__/file2.yml');
  expect(genDiff(yamlFilePath1, yamlFilePath2)).toEqual(expectedDiff);
});

test('genDiff() compares two nested JSON files and produces the expected result', () => {
  const jsonFilePath1 = path.resolve(dirname, '__fixtures__/fileWithNesting1.json');
  const jsonFilePath2 = path.resolve(dirname, '__fixtures__/fileWithNesting2.json');
  expect(genDiff(jsonFilePath1, jsonFilePath2)).toEqual(expectedNestedDiff);
});

test('genDiff() compares two nested YAML files and produces the expected result', () => {
  const jsonFilePath1 = path.resolve(dirname, '__fixtures__/fileWithNesting1.yaml');
  const jsonFilePath2 = path.resolve(dirname, '__fixtures__/fileWithNesting2.yaml');
  expect(genDiff(jsonFilePath1, jsonFilePath2)).toEqual(expectedNestedDiff);
});

test('genDiff() compares two JSON files and produces the expected plain result', () => {
  const jsonFilePath1 = path.resolve(dirname, '__fixtures__/fileWithNesting1.json');
  const jsonFilePath2 = path.resolve(dirname, '__fixtures__/fileWithNesting2.json');
  expect(genDiff(jsonFilePath1, jsonFilePath2, 'plain')).toEqual(expectedPlainDiff);
});

test('genDiff() compares two YAML files and produces the expected plain result', () => {
  const yamlFilePath1 = path.resolve(dirname, '__fixtures__/fileWithNesting1.yaml');
  const yamlFilePath2 = path.resolve(dirname, '__fixtures__/fileWithNesting2.yaml');
  expect(genDiff(yamlFilePath1, yamlFilePath2, 'plain')).toEqual(expectedPlainDiff);
});

test('genDiff() compares two JSON files and produces the expected JSON result', () => {
  const jsonFilePath1 = path.resolve(dirname, '__fixtures__/fileWithNesting1.json');
  const jsonFilePath2 = path.resolve(dirname, '__fixtures__/fileWithNesting2.json');
  expect(genDiff(jsonFilePath1, jsonFilePath2, 'json')).toEqual(expectedJsonDiff);
});

test('genDiff() compares two YAML files and produces the expected JSON result', () => {
  const jsonFilePath1 = path.resolve(dirname, '__fixtures__/fileWithNesting1.yaml');
  const jsonFilePath2 = path.resolve(dirname, '__fixtures__/fileWithNesting2.yaml');
  expect(genDiff(jsonFilePath1, jsonFilePath2, 'json')).toEqual(expectedJsonDiff);
});
