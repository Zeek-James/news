import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.gettechNews().subscribe((res) => {
      this.result = res;
      const data = this.result.results;
      console.log(data);
      this.news = data;
    });
  }
}
