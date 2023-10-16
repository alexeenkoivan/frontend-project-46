import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import diff from './diff.js';
import formatDiff from './formaters/index.js';

const getAbsoluteFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const data1 = readFile(getAbsoluteFilePath(filepath1));
  const data2 = readFile(getAbsoluteFilePath(filepath2));

  const obj1 = parsers(data1, getFormat(filepath1));
  const obj2 = parsers(data2, getFormat(filepath2));

  return formatDiff(diff(obj1, obj2), formatType);
};

export default genDiff;
