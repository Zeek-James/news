import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  typeSelected: string;

  constructor(
    public spinnerService: NgxSpinnerService,
    public loaderService: LoadingService
  ) {}

  ngOnInit() {
    this.spinnerService.show();
  }
}
