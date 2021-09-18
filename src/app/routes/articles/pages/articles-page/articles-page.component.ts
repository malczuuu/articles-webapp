import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../core/api/article.service';
import { Slice } from '../../../../core/api/slice.model';
import { Article } from '../../../../core/api/article.model';

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
}
