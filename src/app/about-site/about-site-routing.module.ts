import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSitePage } from './about-site.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSitePageRoutingModule {}
