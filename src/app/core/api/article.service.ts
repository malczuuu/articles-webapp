import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slice } from './slice.model';
import { Article, ArticleUpdate } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly api: string = '/api/articles';

  constructor(private httpClient: HttpClient) {}

  findArticles(limit: number = 20): Observable<Slice<Article>> {
    return this.httpClient.get<Slice<Article>>(this.api, { params: { limit: limit.toString() } });
  }

  findArticlesByPath(path: string): Observable<Slice<Article>> {
    return this.httpClient.get<Slice<Article>>(path);
  }

  findArticleById(id: string): Observable<Article> {
    return this.httpClient.get<Article>(`${this.api}/${id}`);
  }

  createArticle(article: ArticleUpdate): Observable<Article> {
    return this.httpClient.post<Article>(this.api, article);
  }

  updateArticle(id: string, article: ArticleUpdate): Observable<Article> {
    return this.httpClient.put<Article>(`${this.api}/${id}`, article);
  }

  deleteArticle(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/${id}`);
  }
}
