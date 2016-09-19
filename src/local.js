// lokalni verze, ktera cte ze souboru
'use strict';

const fs = require("fs");
const mrtvakator = require("./mrtvakator");

const vstup = fs.readFileSync("./mrtvaci.txt").toString();

let parts = mrtvakator.parseMrtvakLines(vstup);
let text2show = mrtvakator.createMrtvakStory(parts);
console.log(text2show);

// const otrokator = require('./otrokator');
// let context = {};
// let text2show = otrokator.getOtrokName(context);
// console.log(text2show);
// console.log(context);
