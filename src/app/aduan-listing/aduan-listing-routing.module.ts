import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanListingPage } from './aduan-listing.page';

const routes: Routes = [
  {
    path: '',
    component: AduanListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanListingPageRoutingModule {}
