'use strict';


const padString = (initialString, length, symbol, right = true) => {
  if (typeof initialString !== 'string') throw new Error('initialString is not in type String');
  if (typeof length !== 'number') throw new Error('length is not in type Number');

  if (initialString.length === length) return initialString;
  if (initialString.length > length) return initialString.substring(0, length)

  if (typeof symbol !== 'string') throw new Error('symbol is not in type String');
  if (symbol > 1) throw new Error('symbol length is too long');
  if (typeof right !== 'boolean') throw new Error('side is not in type Boolean');


  const symbols = symbol.repeat(length - initialString.length);

  return right ? initialString + symbols : symbols + initialString;
}
console.log(padString('hello', 2));

