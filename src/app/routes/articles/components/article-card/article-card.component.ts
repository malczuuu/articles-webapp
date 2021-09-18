import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../../core/api/article.model';
import * as moment from 'moment';

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

  getTimestamp(): string {
    return moment(this.article?.last_modified_date).format('YYYY-MM-DD');
  }
}
