import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // loading$ = this.loader.loading$;
  typeSelected: string;

  // constructor(public loader: LoadingService) {
  constructor(
    public spinnerService: NgxSpinnerService,
    // public loader: LoadingService
    public loaderService: LoadingService
  ) {
    // this.typeSelected = 'ball-atom';
  }

  ngOnInit() {
    this.spinnerService.show();
  }
}
