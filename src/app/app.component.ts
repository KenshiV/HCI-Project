import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApiService } from './services/api.service';
import { MaintainenceComponent } from './pages/maintainence/maintainence.component';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, MaintainenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'eco-media';
  @ViewChild('parent') parent!: ElementRef;

  constructor(
    private apiService: ApiService,
    private sharedServie: SharedService
  ) {}

  ngOnInit(): void {
    this.apiService.getNews();
    this.sharedServie.currentPage$.subscribe(
      (data) => (this.parent.nativeElement.scrollTop = 0)
    );
  }
}
