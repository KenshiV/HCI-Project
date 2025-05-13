import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-two',
  imports: [],
  templateUrl: './card-two.component.html',
  styleUrl: './card-two.component.css'
})
export class CardTwoComponent {
  constructor(private apiService:ApiService) {}
  
  @Output() viewEmmiter = new EventEmitter<any>()
  @Input() data: any = {};
  @Input() category: string = 'أخبار';

  onClick() {
    this.apiService.selectedObject=this.data;
    this.viewEmmiter.emit({page:'blog'})
  }
}
