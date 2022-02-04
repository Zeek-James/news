import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NetworkInterceptor } from './interceptors/network.interceptor';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TechComponent } from './components/tech/tech.component';
import { EnvComponent } from './components/env/env.component';
import { FoodComponent } from './components/food/food.component';
import { EntComponent } from './components/ent/ent.component';
import { BizzComponent } from './components/bizz/bizz.component';
import { PolComponent } from './components/pol/pol.component';
import { TopComponent } from './components/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonComponent,
    BreakingNewsComponent,
    BannerComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    TechComponent,
    EnvComponent,
    FoodComponent,
    EntComponent,
    BizzComponent,
    PolComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
