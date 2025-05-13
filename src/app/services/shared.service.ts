import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private currentPageSubject = new BehaviorSubject<any>({ page: 'home' });
  public currentPage$ = this.currentPageSubject.asObservable();

  private previousPageSubject = new BehaviorSubject<any>({ page: 'home' });
  public previousPage$ = this.previousPageSubject.asObservable();

  public set currentPage(v: any) {
    this.currentPageSubject.next(v);
  }

  public set previousPage(v: any) {
    this.previousPageSubject.next(v);
  }
}
