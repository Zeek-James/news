import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-bizz',
  templateUrl: './bizz.component.html',
  styleUrls: ['./bizz.component.css'],
})
export class BizzComponent implements OnInit {
  news: any = [];
  result: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getbizzNews().subscribe((res) => {
      this.result = res;
      const data = this.result.results;
      console.log(data);
      this.news = data;
    });
  }
}
