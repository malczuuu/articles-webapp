import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowseArticlePageComponent } from './pages/browse-article-page/browse-article-page.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';

@NgModule({
  declarations: [
    ArticlesPageComponent,
    CreateArticlePageComponent,
    BrowseArticlePageComponent,
    ArticleFormComponent,
  ],
  imports: [CommonModule, ArticlesRoutingModule, ReactiveFormsModule],
})
export class ArticlesModule {}
