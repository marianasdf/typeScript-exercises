"use strict";
/* Exercício 1 : Crie um script para converter unidades de medida de comprimento:
Esse script deverá se chamar length.ts ;
Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.erro = exports.units = void 0;
exports.units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const erro = (unity) => {
    throw new Error(`A unidade ${unity} não é válida`);
};
exports.erro = erro;
const convert = (value, baseUnit, conversationUnit) => {
    if (!exports.units.includes(baseUnit))
        (0, exports.erro)(baseUnit);
    if (!exports.units.includes(conversationUnit))
        (0, exports.erro)(conversationUnit);
    const baseIndex = exports.units.indexOf(baseUnit);
    const conversationIndex = exports.units.indexOf(conversationUnit);
    const exponent = (conversationIndex - baseIndex);
    return value * Math.pow(10, exponent);
};
exports.convert = convert;
