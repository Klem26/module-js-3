function countTotalSalary(salaries) {
  let totalSalary = 0;
 
  
   const keys = Object.keys(salaries);
  
  
  
  for (const key of keys) {
     
     totalSalary += salaries[key];
    
  }
    
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

