// components
import { Component } from '@angular/core';

// models
import { Book }      from '../../models/book.model';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  // define properties
  private book: Book;

  constructor() {
    // create book object
    this.book = new Book(1, '', '', 'http://');
  }

  get currentBook() {
    // return book model object in JSON format
    return JSON.stringify(this.book);
  }
}