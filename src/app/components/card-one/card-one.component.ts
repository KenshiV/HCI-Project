import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-one',
  imports: [],
  templateUrl: './card-one.component.html',
  styleUrl: './card-one.component.css'
})
export class CardOneComponent {
  constructor(private apiService:ApiService) {}

  @Output() viewEmmiter = new EventEmitter<any>()
  @Input() data: any = {};

  onClick() {
    this.apiService.selectedObject=this.data;
    this.viewEmmiter.emit({page:'blog'})
  }
}
