import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css'],
})
export class BreakingNewsComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.news = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['newsSearch']) {
        console.log(params);
        this.newsService.getNews().subscribe((res) => {
          this.result = res;
          const data = this.result.results;
          const filteredData = data.filter(
            (n: { title: { toLowerCase: () => string | any[] } }) =>
              n.title.toLowerCase().includes(params['newsSearch'].toLowerCase())
          );

          this.news = filteredData;
        });
        this.news.filter(
          (n: { title: { toLowerCase: () => string | any[] } }) =>
            n.title.toLowerCase().includes(params['newsSearch'].toLowerCase())
        );
      } else {
        this.newsService.getNews().subscribe((res) => {
          this.result = res;
          const data = this.result.results;
          this.news = data;
        });
      }
      // this.newsService.getNews().subscribe((res) => {
      //   this.result = res;
      //   const data = this.result.results;
      //   this.news = data;
      //   console.log(this.result.results);
      //   console.log(data);
      // });
    });
  }
}
