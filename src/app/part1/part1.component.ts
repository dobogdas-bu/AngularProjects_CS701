import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-part1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './part1.component.html',
  styleUrl: './part1.component.css'
})


export class Part1Component implements OnInit{
undoDisabled: boolean = true
redoDisabled: boolean = true
  
defaultBooks = [
  { title: 'Absolute Java', qty: 1, price: 114.95 },
  { title: 'Pro HTML5', qty: 2, price: 27.95 },
  { title: 'Head First HTML5', qty: 1, price: 27.89 }
];
undoArray : Array<any>|undefined = []
redoArray : Array<any>|undefined =[]
books: Array<any> | undefined



ngOnInit() :void{
  let stored = localStorage.getItem('Bogdas_cart')
  if (stored) {

    this.books = JSON.parse(stored)
    this.updateTotal()
  
  } else {
    this.books = this.defaultBooks
  }
}

updateTotal(){
  let total = 0;
  
  this.books?.forEach(book => {
    total += book.qty * book.price

  });
  
  return total;
}


addBook() {

  let copy :any = this.books?.map(book => {
    return book
  })
  this.undoArray?.push(copy)
  

  this.books?.push({ title: 'New Book', qty: 1, price: 10.99 })
  this.undoDisabled = false
}

removeBook(index: any) {
  let copy = this.books?.map(book => {
    return book
  })
  this.undoArray?.push(copy)

  this.books?.splice(index, 1)
  this.undoDisabled = false
}

saveBooks() {
  localStorage.setItem('Bogdas_cart', JSON.stringify(this.books))
  alert('Cart Saved')
}


undo() {
  // create copy of current books to push to redo array
  let copy = this.books?.map(book => {
    return book
  })

  this.books = this.undoArray?.[this.undoArray.length - 1]
  this.redoDisabled = false
  
    this.redoArray?.push(copy)
  
  //remove last books from undo array as its not set as the current books
  if (this.undoArray?.length) {
    this.undoArray.pop()
  }
  //disable undo button if array empty
  if(!this.undoArray?.length) this.undoDisabled = true
 
}


redo() {
  //create copy of current books to push back onto the undo array after redo is clicked
  let copy = this.books?.map(book=>{
    return book
  })
  this.books = this.redoArray?.[this.redoArray.length - 1]
  this.redoArray?.pop()
  this.undoArray?.push(copy)
  // document.getElementById('undo').disabled = false
  if(!this.redoArray?.length) this.redoDisabled = true
}


}
