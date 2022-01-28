import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  typeSelected: string;
  // private _loading = new BehaviorSubject<boolean>(false);
  // public readonly loading$ = this._loading.asObservable();

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    // false
    true
  );

  constructor() {}

  // show() {
  //   this._loading.next(true);
  //   console.log('loading');
  //   // this.spinnerService.show();
  // }

  // hide() {
  //   console.log('not loading');

  //   this._loading.next(false);
  // }
}
