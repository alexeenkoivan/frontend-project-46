#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';
import path from 'path';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version','output version information')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);
    const diff = genDiff(absolutePath1, absolutePath2);
    console.log(diff);
  })
  .parse();
