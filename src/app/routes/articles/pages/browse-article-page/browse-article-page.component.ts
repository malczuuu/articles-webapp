import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../core/api/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleUpdate } from '../../../../core/api/article.model';

@Component({
  selector: 'app-browse-article-page',
  templateUrl: './browse-article-page.component.html',
  styleUrls: ['./browse-article-page.component.scss'],
})
export class BrowseArticlePageComponent implements OnInit {
  articleId?: string;
  article?: Article;

  savedMessage: string = '';

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articleId = params.get('article')!;
      this.articleService
        .findArticleById(this.articleId!)
        .subscribe((article) => (this.article = article));
    });
  }

  onSave(article: ArticleUpdate) {
    this.articleService.updateArticle(this.articleId!, article).subscribe((article) => {
      this.article = article;
      this.savedMessage = 'Saved!';
    });
  }
}
