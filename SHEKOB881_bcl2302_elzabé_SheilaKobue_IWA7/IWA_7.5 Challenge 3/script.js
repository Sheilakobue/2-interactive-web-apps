//Output as a single(only a single console.log) but split into three different lines.
//ParseInt method parses a value as a string and returns the first integer.
// ParseInt focuses on creating a number(abstracting a number out of a variable)
//parseInt destruct only number before the decimal

//Parsefloat-gives you the number including decimal

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

const owed = parseFloat( -1* leoBalance) + (-1* sarahBalance)

const leo = `${leoName} ${(leoSurname).trim()} Owed :R${parseFloat(-1 *leoBalance).toFixed(2)}\n`

const sarah = `${sarahName} ${(sarahSurname).trim()} Owed :R${parseFloat(-1 *sarahBalance).toFixed(2)}\n`

const total = `\n\t Total amount:R${parseFloat(owed).toFixed(2)}`

const result= leo + sarah + divider+ total + '\n'+ divider

console.log(result);
