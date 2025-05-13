import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [
    CommonModule
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() type = 1
  data = {
    one: {
      title:'النشرة الإخبارية',
      body:'إبق علي اضطلاع بالأخبار والإلهام من خط الطابقين الطبيعي',
    },
    two: {
      title:'نحن فريق مشروع التخرج',
      body:'نؤمن بقوة الصحافة البيئية في إحداث التغيير، ونعمل علي تسليط الضوء علي القضايا البيئية المهمة. هدفنا هو نشر الوعي ودعم الجهود لحماية كوكبنا للأجيال القادمة.',
      slog:'كن جزء من رحلتنا، وشاركنا رسالتنا'
    }
  }
}
