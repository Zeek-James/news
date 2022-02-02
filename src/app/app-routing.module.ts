import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:newsSearch', component: BreakingNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
