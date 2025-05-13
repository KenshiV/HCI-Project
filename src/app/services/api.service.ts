import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private newsSubject = new BehaviorSubject<any>({});
  news$ = this.newsSubject.asObservable();

  private selectedObjectSubject = new BehaviorSubject<any>({});
  selectedObject$ = this.selectedObjectSubject.asObservable();

  getNews() {
    this.http
      .get<any>('/data/news-final-3.json')
      .subscribe((res) => this.newsSubject.next(res));
  }

  public set selectedObject(v: any) {
    this.selectedObjectSubject.next(v);
  }
}
