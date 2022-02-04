import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-pol',
  templateUrl: './pol.component.html',
  styleUrls: ['./pol.component.css'],
})
export class PolComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getpolNews().subscribe((res) => {
      this.result = res;
      const data = this.result.results;
      console.log(data);
      this.news = data;
    });
  }
}
