import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BooksModalPage } from '../books-modal/books-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  authors: any
  booksOff: any

  slideOps = {
    initialSlide: 5,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  }

  constructor(
    private router: Router, 
    private libraryService: LibraryService, 
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController) { }

  ionViewDidEnter() {
    this.libraryService.getAuthors()
      .then(listAuthors => {
        this.authors = listAuthors
      })

    // this.booksOff = this.libraryService.getBooksOffline()
  }

  async showBooks(author: any) {
    let book_list: any
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        books: book_list,
        author: author
      }
    })
    return await modal.present()
  }

  finish() {
    this.router.navigateByUrl("/intro")
  }

  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateForward("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }

  goToTopBooks(){
    this.navCtrl.navigateForward("/menu/top-books");
    this.menu.close();
  }

}
