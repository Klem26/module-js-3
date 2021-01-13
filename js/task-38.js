const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
 
  
 
    this.potions.push(potionName);
    
  },
};
console.log(atTheOldToad.addPotion('Невидимка'));
console.log(atTheOldToad.addPotion('Зелье силы'))