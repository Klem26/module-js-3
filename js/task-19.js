const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const propertis =[];
  
 for ( const product of products) {
  
 const keys = Object.keys(product);
  
for (const key of keys ){
  
  if( key === propName){
    
      propertis.push(product[key])
  }

}
  }
  
return propertis
  
  // Пиши код выше этой строки
}