import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any
  books: any

  constructor(private navParams: NavParams, private modalController: ModalController, private libraryService: LibraryService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author")
    this.libraryService.getBooksAuthor(this.author.id)
      .then(booksAuthor => this.books = booksAuthor)
  }

  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }

  closeModal() {
    this.modalController.dismiss()
  }

}
