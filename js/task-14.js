function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  
  const keys = Object.keys(object);
  
  for (const key of keys) {
     
      propCount += 1;
    
  }

    return propCount;
    
 
}
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
console.log(countProps({ name: "Mango", age: 2 }));