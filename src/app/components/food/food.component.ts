import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getfoodNews().subscribe((res) => {
      this.result = res;
      const data = this.result.results;
      console.log(data);
      this.news = data;
    });
  }
}
