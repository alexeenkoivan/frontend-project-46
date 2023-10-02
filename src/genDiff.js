#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import stylish from './formaters/stylish.js';
import diff from './formaters/diff.js';

const getAbsoluteFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(getAbsoluteFilePath(filepath1));
  const data2 = readFile(getAbsoluteFilePath(filepath2));

  const obj1 = parsers(data1, getFormat(filepath1));
  const obj2 = parsers(data2, getFormat(filepath2));

  const differences = diff(obj1, obj2);

  return stylish(differences);
};

export default genDiff;
