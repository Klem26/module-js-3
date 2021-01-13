function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
 
  const newTask ={completed, category, priority ,...data};
  
  return newTask
  
  

}
console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }))