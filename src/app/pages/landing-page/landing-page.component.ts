import { Component, EventEmitter, Output } from '@angular/core';
import { CardOneComponent } from '../../components/card-one/card-one.component';
import { CardTwoComponent } from '../../components/card-two/card-two.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { FormsModule } from '@angular/forms';
import { VideoPlayerComponent } from "../../components/video-player/video-player.component";

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
    FormsModule,
    CardOneComponent,
    CardTwoComponent,
    NewsCardComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {
    this.apiService.news$.subscribe((res) => (this.newsData = res.news));
  }

  newsData: any = {};

  ngOnInit(): void {
    this.apiService.news$.subscribe((res) => {
      this.newsData = res.news
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    });
  }

  displayDetailes(obj: any) {
    this.sharedService.previousPage = { page: 'home' };
    this.apiService.selectedObject = obj;
    this.sharedService.currentPage = { page: 'blog' };
  }
}
