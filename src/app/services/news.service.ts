import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../News';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // private apiUrl = 'https://newsdata.io/api/1/news';
  private apiUrl =
    'https://newsdata.io/api/1/news?apikey=pub_39807bd3f222ffb91f747a1c820bc06ec9df&language=fr';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}
