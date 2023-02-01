import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-author-detail-modal',
  templateUrl: './author-detail-modal.page.html',
  styleUrls: ['./author-detail-modal.page.scss'],
})
export class AuthorDetailModalPage implements OnInit {

  author: any

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.author = this.navParams.get("author")
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
