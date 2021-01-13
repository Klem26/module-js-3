const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  
  
  addPotion(potionName) {

    this.potions.push(potionName);
  },
  
  removePotion(potionName) { 
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {  
    
     for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
      }
    }
  },
 
};
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'))
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'))