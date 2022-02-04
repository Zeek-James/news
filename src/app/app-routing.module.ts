import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BizzComponent } from './components/bizz/bizz.component';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { EntComponent } from './components/ent/ent.component';
import { EnvComponent } from './components/env/env.component';
import { FoodComponent } from './components/food/food.component';
import { HomeComponent } from './components/home/home.component';
import { PolComponent } from './components/pol/pol.component';
import { TechComponent } from './components/tech/tech.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tech', component: TechComponent },
  { path: 'politics', component: PolComponent },
  { path: 'food', component: FoodComponent },
  { path: 'environment', component: EnvComponent },
  { path: 'entertainment', component: EntComponent },
  { path: 'business', component: BizzComponent },
  { path: 'search/:newsSearch', component: BreakingNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
