#!/usr/bin/env node

const program = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .version('output the version number')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format  <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(filepath1, filepath2);
  });

program.parse();
