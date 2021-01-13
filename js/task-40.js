const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
  
      const index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);
   
  },
};
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'))