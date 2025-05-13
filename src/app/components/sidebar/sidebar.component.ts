import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    private sharedService:SharedService
  ) {
    this.currentPage.emit({page:'home'});
  }

  @Input() isActive:boolean = false;
  @Output() currentPage:any = new EventEmitter<any>();

  changePage(page:any){
    this.sharedService.currentPage = page
  }
}
