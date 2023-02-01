import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopBooksPage } from './top-books.page';

const routes: Routes = [
  {
    path: '',
    component: TopBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopBooksPageRoutingModule {}
