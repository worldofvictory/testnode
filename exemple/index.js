const { program } = require('commander'); // деструкторизація замість const commander = require('commander'), а потім десь витягувати commander.program
const fs = require('fs').promises;
const readline = require('readline');
require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

