import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSitePageRoutingModule } from './about-site-routing.module';

import { AboutSitePage } from './about-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSitePageRoutingModule
  ],
  declarations: [AboutSitePage]
})
export class AboutSitePageModule {}
