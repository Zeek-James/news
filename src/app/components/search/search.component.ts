import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  newsSearch: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['newsSearch']) {
        this.newsSearch = params['newsSearch'];
      }
    });
  }
  search() {
    if (this.newsSearch) {
      this.router.navigateByUrl('/search/' + this.newsSearch);
    }
  }
}
