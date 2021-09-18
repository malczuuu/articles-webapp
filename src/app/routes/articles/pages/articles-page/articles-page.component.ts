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
  articles: Article[] = [];
  page?: Slice<Article>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.findArticles(this.limit).subscribe((page) => this.onPageRetrieval(page));
  }

  private onPageRetrieval(page: Slice<Article>) {
    this.page = page;
    this.articles.push(...page.content);
  }

  getDate(article: Article): string {
    return moment(article.last_modified_date).format('YYYY-MM-DD');
  }

  getTimestamp(article: Article): string {
    return moment(article.last_modified_date).format('YYYY-MM-DD HH:mm:ss');
  }

  onSeeMoreClick() {
    if (this.page?._links.next) {
      this.articleService
        .findArticlesByPath(this.page!._links.next)
        .subscribe((page) => this.onPageRetrieval(page));
    } else {
      this.articleService.findArticlesByPath(this.page!._links.self).subscribe((page) => {
        for (let i = 0; i < this.page!.content.length; ++i) {
          this.articles.pop();
        }
        this.onPageRetrieval(page);
      });
    }
  }
}
