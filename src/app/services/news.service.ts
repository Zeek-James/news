import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../News';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://newsdata.io/api/1/news?apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';

  techNews =
    'https://newsdata.io/api/1/news?category=technology&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';

  envNews =
    'https://newsdata.io/api/1/news?category=environment&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';
  foodNews =
    'https://newsdata.io/api/1/news?category=food&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';
  entNews =
    'https://newsdata.io/api/1/news?category=entertainment&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';
  bizzNews =
    'https://newsdata.io/api/1/news?category=bussiness&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';
  polNews =
    'https://newsdata.io/api/1/news?category=politics&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';

  topNews =
    'https://newsdata.io/api/1/news?category=top&apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=en';

  constructor(private http: HttpClient) {}
  gettechNews(): Observable<News[]> {
    return this.http.get<News[]>(this.techNews);
  }
  getenvNews(): Observable<News[]> {
    return this.http.get<News[]>(this.envNews);
  }
  getfoodNews(): Observable<News[]> {
    return this.http.get<News[]>(this.foodNews);
  }
  getentNews(): Observable<News[]> {
    return this.http.get<News[]>(this.entNews);
  }
  getbizzNews(): Observable<News[]> {
    return this.http.get<News[]>(this.bizzNews);
  }
  getpolNews(): Observable<News[]> {
    return this.http.get<News[]>(this.polNews);
  }
  gettopNews(): Observable<News[]> {
    return this.http.get<News[]>(this.topNews);
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
