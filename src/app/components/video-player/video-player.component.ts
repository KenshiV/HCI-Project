import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import Plyr from 'plyr';


@Component({
  selector: 'app-video-player',
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements AfterViewInit, OnChanges{
  @Input() borderRadius?: string ='16px';
  @Input() src?: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() init?: boolean = false;
  @Input() controls?: boolean;
  @Input() autoplay?: boolean = true;
  @Input() unmute?: boolean = true;

  @ViewChild('autoplayVideo') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;

    if (this.init) {     
      video.muted = true;
      video.playsInline = true;
    }
    
    if (this.autoplay) {
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Autoplay was prevented:', error);
        });
      }
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['unmute'] && this.videoRef) {
      this.videoRef.nativeElement.muted = false;
      
      // If unmuting, attempt to play if not already playing
      if (this.videoRef.nativeElement.paused && this.autoplay) {
        this.videoRef.nativeElement.play()
          .catch(err => console.error('Playback failed:', err));
      }
    }
  }
}
