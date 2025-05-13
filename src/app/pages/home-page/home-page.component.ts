import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from '../blog-page/blog-page.component';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { VideoPlayerComponent } from "../../components/video-player/video-player.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoryPageComponent,
    BlogPageComponent,
    AboutusComponent,
    VideoPlayerComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  isSideBarActive: boolean = false;
  currentPage = { page: 'home' };
  newsData: any = {};
  muted = true;
  counter = 15;
  skipV =false;

  @ViewChild('parent') parent!:ElementRef;
  @ViewChild('video') video!:ElementRef;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.currentPage$.subscribe(
      (res) => {
        this.currentPage = res
      }
    );

    let counter = setInterval(() => {
    if (this.counter > 0) {
      this.counter--;
    } else {
      clearInterval(counter);
    }
    }, 1000);

  }

  unmute() {
    this.muted = false
  }

  skipVid(){
    this.skipV=true;
    this.video.nativeElement.style.display ='none'
  }
}
