module.exports =
function check(str, bracketsConfig) {
  const OPEN_BRACKETS = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];

  const BRACKETS_PAIR = {
    ")": '(',
    '}': '{',
    ']': '[',
    '|': '|',  
    '2': '1',
    '4': '3',
    '6': '5',
    '7': '7',  
    '8': '8',  
  };

  let bracketsStack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (currentSymbol === '|' || currentSymbol === '7' || currentSymbol === '8') {
      
      if (bracketsStack.length > 0 && bracketsStack[bracketsStack.length - 1] === currentSymbol) {
        bracketsStack.pop(); 
      } else {
        bracketsStack.push(currentSymbol);
      }
    } else if (OPEN_BRACKETS.includes(currentSymbol)) {                     
      bracketsStack.push(currentSymbol);
    } else {
      if (bracketsStack.length === 0) {
        return false;
      }

      let lastSymbolInStack = bracketsStack[bracketsStack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === lastSymbolInStack) {
        bracketsStack.pop();
      } else {
        return false;
      }
    }
  }

  return bracketsStack.length === 0;
}





// console.log(check('((()))()'));










// module.exports = check();
