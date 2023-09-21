#!/usr/bin/env node

import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parsers from './parsers';

const getAbsoluteFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(getAbsoluteFilePath(filepath1));
  const data2 = readFile(getAbsoluteFilePath(filepath2));

  const obj1 = parsers(data1, getFormat(filepath1));
  const obj2 = parsers(data2, getFormat(filepath2));

  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (!_.has(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (obj1[key] === obj2[key]) {
      return `    ${key}: ${obj1[key]}`;
    }
    return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
  });

  const result = `{\n${diff.join('\n')}\n}`;
  return result;
};

export default genDiff;
