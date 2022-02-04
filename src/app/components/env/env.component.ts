import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-env',
  templateUrl: './env.component.html',
  styleUrls: ['./env.component.css'],
})
export class EnvComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getenvNews().subscribe((res) => {
      this.result = res;
      const data = this.result.results;
      console.log(data);
      this.news = data;
    });
  }
}
