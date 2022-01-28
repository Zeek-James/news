import { Component, OnInit } from '@angular/core';
import { News } from '../../News';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css'],
})
export class BreakingNewsComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService) {
    this.news = [];
  }

  ngOnInit(): void {
    // debugger;
    console.log('hello');
    const res = this.newsService.getNews().subscribe((res) => {
      // debugger;
      this.result = res;
      this.news = this.result.results;
      console.log(this.news);
    });
  }
}
