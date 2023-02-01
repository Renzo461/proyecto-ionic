import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopBooksPageRoutingModule } from './top-books-routing.module';

import { TopBooksPage } from './top-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopBooksPageRoutingModule
  ],
  declarations: [TopBooksPage]
})
export class TopBooksPageModule {}
