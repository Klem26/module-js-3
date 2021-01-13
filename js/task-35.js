const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
   
 
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    
  
  },

};
console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'))