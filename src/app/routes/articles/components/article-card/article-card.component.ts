import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../../core/api/article.model';

@Component({
  selector: '[appArticleCard]',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input()
  article?: Article;

  constructor() {}

  ngOnInit(): void {}

  getId(): string {
    return this.article ? this.article.id : '';
  }

  getSummary(): string {
    const content = this.article ? this.article.content : '';
    if (content.length > 80) {
      return content.substr(0, 80) + '...';
    }
    return content;
  }
}
