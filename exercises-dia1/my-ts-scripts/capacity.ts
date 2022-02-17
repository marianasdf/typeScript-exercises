/* Exercício 3 : Crie um script para converter unidades de medida de capacidade:
Esse script deverá se chamar capacity.ts ;
Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
valor - number
unidade base - string
unidade para a conversão - string */

export const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

export const erro = (unity:string) => {
    throw new Error(`A unidade ${unity} não é válida`)
}


export const convert = (value:number, baseUnit:string, conversationUnit:string) => {
    if (!units.includes(baseUnit)) erro(baseUnit)
    if (!units.includes(conversationUnit)) erro(conversationUnit)

    const baseIndex = units.indexOf(baseUnit); 
    const conversationIndex = units.indexOf(conversationUnit); 
    const exponent = (conversationIndex - baseIndex); 

    return value * Math.pow(10, exponent);
}  