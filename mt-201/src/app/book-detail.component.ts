import { Component }    from '@angular/core';
import { AppBook }      from './model/app.book'    
import { BookService }  from './service/books.service';
@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent { 
    
    books = [
        {
            "title":"Aurangzeb",
            "thumbnail":"assets/books/aurangzeb.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Complete Maus",
            "thumbnail":"assets/books/complete-maus.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Playing It",
            "thumbnail":"assets/books/playing-it.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Scion of Ikshvaku",
            "thumbnail":"assets/books/scion-of-ikshvaku.jpeg",
            "description":"some text about title"
        },
        {
            "title":"The Ivory Throne",
            "thumbnail":"assets/books/the-ivory-throne.jpeg",
            "description":"some text about title"
        },
        {
            "title":"The Ivory Throne",
            "thumbnail":"assets/books/the-ivory-throne.jpeg",
            "description":"some text about title"
        },
        {
            "title":"The Ivory Throne",
            "thumbnail":"assets/books/the-ivory-throne.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Wonder",
            "thumbnail":"assets/books/wonder.jpeg",
            "description":"some text about title"
        }
    ]
}
