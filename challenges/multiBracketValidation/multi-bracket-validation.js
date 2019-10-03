function multiBracketValidation(string) {

  let newString = string.split('');
  
  let openParens = 0;
  let closedParens = 0;
  let openCurly = 0;
  let closedCurly = 0;
  let openArray = 0;
  let closedArray = 0;

  for(let i = 0; i < newString.length; i++) {
    if(newString[i] === '(') openParens++;
    if(newString[i] === ')') closedParens++;
    if(newString[i] === '{') openCurly++;
    if(newString[i] === '}') closedCurly++;
    if(newString[i] === '[') openArray++;
    if(newString[i] === ']') closedArray++;
  }

  let checkArray = [];

  // if(!newString.includes('(' || ')' || '{' || '}' || '[' || ']')) {
  //   return false;
  // }

  if(openParens !== closedParens) checkArray.push(false);
  if(openCurly !== closedCurly) checkArray.push(false);
  if(openArray !== closedArray) checkArray.push(false);
  if(openArray === 0 && closedArray >= 1) checkArray.push(false);
  if(openParens === 0 && closedParens >= 1) checkArray.push(false);
  if(openCurly === 0 && closedCurly >= 1) checkArray.push(false);

  if(checkArray.includes(false)) {
    return false;
  } else {
    return true;
  }
}

module.exports = multiBracketValidation;