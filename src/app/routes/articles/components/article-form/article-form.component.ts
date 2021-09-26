import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Article, ArticleUpdate } from '../../../../core/api/article.model';
import * as moment from 'moment';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  articleForm?: FormGroup;
  formEnabled: boolean = true;

  @Input()
  article?: Article;

  @Input()
  message?: string;

  @Output()
  save: EventEmitter<ArticleUpdate> = new EventEmitter<ArticleUpdate>();

  constructor() {}

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl(this.article != null ? this.article.title : ''),
      content: new FormControl(this.article != null ? this.article.content : ''),
    });
  }

  submit() {
    this.formEnabled = false;
    const title: string = this.articleForm?.get('title')?.value;
    const content: string = this.articleForm?.get('content')?.value;
    this.save.emit({ title: title, content: content });
    this.formEnabled = true;
  }

  hasLastModifiedAt(): boolean {
    return this.getLastModifiedAt().length > 0;
  }

  getLastModifiedAt(): string {
    return this.article
      ? moment(this.article.last_modified_date).format('YYYY-MM-DD HH:mm:ss')
      : '';
  }
}
