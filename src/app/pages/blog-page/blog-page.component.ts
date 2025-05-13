import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { VideoPlayerComponent } from "../../components/video-player/video-player.component";

@Component({
  selector: 'app-blog-page',
  imports: [
    CommonModule, 
    FormsModule,
    VideoPlayerComponent
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent implements OnInit{
  data: any = {};
  objectKeys = Object.keys;
  category = '';

  constructor(private api: ApiService, private sharedService: SharedService) {}
  ngOnInit(): void {
    this.api.selectedObject$.subscribe(
      (res) => {
      this.data = res.data
      this.category = res.type 
      if (this.data.type && this.data.type=="ppt") {
        this.images = this.data.content
        this.selectedImage = this.images[this.index];

        // this.imagesSlider();
      }
    });
  }


  regexPattern = /^(?:\d+\.\s+[\p{L}\s]+|[\p{L}\s]+:)\s*$/u;
  regexPatternTwo= /^(?:\d+\.\s+[\p{L}\s]+|[\p{L}\s]+[0-9]+:)\s*$/u;
  regexPatternThree= /^[\p{L}\s]+:\s*[\p{L}\s]+$/u;

  isSubtitle(p:string) {
    return this.regexPattern.test(p) || this.regexPatternTwo.test(p) || this.regexPatternThree.test(p);
  }


  // PPT
  images = [];

  index=0;
  selectedImage = this.images[this.index];

  setIndex(index:number) {
    this.index = index;
    this.selectedImage = this.images[this.index];
  }

  imagesSlider(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
      this.selectedImage = this.images[this.index];
    }, 10000);
  }
}
