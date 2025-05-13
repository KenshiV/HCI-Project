import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private sharedService: SharedService) {}

  @Output() isActiveEmmiter = new EventEmitter<boolean>(false);

  isActive: boolean = false;

  sidebarToggler() {
    this.isActive = !this.isActive;
    this.isActiveEmmiter.emit(this.isActive);
  }

  goBack() {
    this.sharedService.previousPage$.subscribe(
      (res) => {
        this.sharedService.currentPage = res
      }
    );
  }
}
