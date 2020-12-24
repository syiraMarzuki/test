import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AduanListingPageRoutingModule } from './aduan-listing-routing.module';

import { AduanListingPage } from './aduan-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanListingPageRoutingModule
  ],
  declarations: [AduanListingPage]
})
export class AduanListingPageModule {}
