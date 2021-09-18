import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../core/api/article.service';
import { Slice } from '../../../../core/api/slice.model';
import { Article } from '../../../../core/api/article.model';
import * as moment from 'moment';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
})
export class ArticlesPageComponent implements OnInit {
  limit: number = 20;
  articles?: Slice<Article>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .findArticles(this.limit)
      .subscribe((articles) => (this.articles = articles));
  }

  getDate(article: Article): string {
    return moment(article.last_modified_date).format('YYYY-MM-DD');
  }

  getTimestamp(article: Article): string {
    return moment(article.last_modified_date).format('YYYY-MM-DD HH:mm:ss');
  }
}
