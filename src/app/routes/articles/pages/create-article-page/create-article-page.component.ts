import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../../../../core/api/article.service';
import { Router } from '@angular/router';
import { ArticleUpdate } from '../../../../core/api/article.model';

@Component({
  selector: 'app-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss'],
})
export class CreateArticlePageComponent implements OnInit {
  articleForm?: FormGroup;
  formEnabled: boolean = true;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
    });
  }

  submit() {
    this.formEnabled = false;
    const title: string = this.articleForm?.get('title')?.value;
    const content: string = this.articleForm?.get('content')?.value;
    this.articleService
      .createArticle({
        title: title,
        content: content,
      })
      .subscribe((article) => this.router.navigateByUrl(`/articles/browse/${article.id}`));
  }

  onSave(article: ArticleUpdate) {
    this.articleService
      .createArticle(article)
      .subscribe((article) => this.router.navigateByUrl(`/articles/browse/${article.id}`));
  }
}
