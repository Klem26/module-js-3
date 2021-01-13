
function findMatches(newArray, ...args) {
  const matches = []; // Не изменяй эту строку
  
  for(const arg of args){
  if ( newArray.includes(arg)){
    matches.push(arg)
    }
  
  }

  return matches;
}
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41))