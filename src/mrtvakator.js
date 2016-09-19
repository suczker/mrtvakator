/**
 * naparsuje linky se seznamem mrtvaku, jak je vyrobil pan azatoth
 * @returns utridene pole poli, kde po sobe nasleduji vyrazy
 */

'use strict';

const getOtrokName = require('./otrokator').getOtrokName;

// context obsahuje ruzne stavove promenne, napriklad sloveso, ze ktereho se sklada nazev otroka
let context = {};  // kontext se predava do funkce, ve ktere mohou byt vyuzity existuji 


/**
 * takes context key context['otrokVerbRadix'] name and ads `l` to the end
 * makes no change to context
 */

function getPastTenseFromVerbRadix(context){
    // preklopeni radixu, pokud je to nutne
    let radix = context['otrokVerbRadix'] ;
    let irregRadixes = {
        'prdi' : 'prde',
    }
    if(irregRadixes.hasOwnProperty(radix)){
        radix = irregRadixes[radix];
    }
    return radix + 'l';
}

let callContext = {
    'trtkaci trtkadlacisko tutof [inkorporovat vystup generatoru pana nmastera]' : getOtrokName,
    'trtkal [' : getPastTenseFromVerbRadix,
}

function parseMrtvakLines(lines){
    // debugger;
    let shuffleParts = [];
    let lineChunks = lines.split(/\s*---\s*/);
    for(let chunk of lineChunks){
        let lines = chunk.split(/\s*\n\s*/);
        let linesOut = [];
        // console.log(lines);
        for(let line of lines){
            if(line.length > 0){
                // iteruje pres hash callContext a testuje, jestli nektery z klicu odpovida
                // zacatku nahodne vygenerovanehos stringu. Pokud ano, tak se zavola funkce
                // z callContext. Jinak se proste string prida do linesOut
                for(let tstKey in callContext){
                    if(line.substring(0, tstKey.length) === tstKey){
                        // klic se shoduje s vygenerovanym retezcem, vystup si necham poslat z funkce
                        line = callContext[tstKey](context);
                    }
                }
                linesOut.push(line);
            }
        }
        if(linesOut.length> 0){
            shuffleParts.push(linesOut);
        }
    }
    
    return shuffleParts;
}

function createMrtvakStory(storyParts){
    let partsOut = [];
    for (let part of storyParts){
        let exprUsed = part[Math.floor(Math.random() * part.length)];
        partsOut.push(exprUsed);
    }
    return partsOut.join(' ');
}

const api = {
    parseMrtvakLines : parseMrtvakLines,
    createMrtvakStory : createMrtvakStory,
}

module.exports = api;

if(require.main === module){
    // if run directly, test something
    console.log(getPastTenseFromVerbRadix({otrokVerbRadix : 'prdi'}));
    console.log(getPastTenseFromVerbRadix({otrokVerbRadix : 'honi'}));
}
