import { Component, OnInit } from '@angular/core';
import { VideoPlayerComponent } from "../../components/video-player/video-player.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, VideoPlayerComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{
  images = [
    "https://res.cloudinary.com/dypplxusy/image/upload/v1746021735/1_20250428_204658_0000_lxxsjd.png",
    "https://res.cloudinary.com/dypplxusy/image/upload/v1746021734/2_20250428_204658_0001_eyvmua.png",
    "https://res.cloudinary.com/dypplxusy/image/upload/v1746021731/3_20250428_204658_0002_wcg8fe.png",
    "https://res.cloudinary.com/dypplxusy/image/upload/v1746021732/4_20250428_204658_0003_eqmvrk.png",
    "https://res.cloudinary.com/dypplxusy/image/upload/v1746021735/5_20250428_204658_0004_p5xdxv.png"
  ];

  index=0;
  selectedImage = this.images[this.index];

  ngOnInit(): void {
    this.imagesSlider();
  }

  setIndex(index:number) {
    this.index = index;
    this.selectedImage = this.images[this.index];
    
  }

  imagesSlider(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
      this.selectedImage = this.images[this.index];
    }, 5000);
  }
}
