import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  typeSelected: string;

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}
}
