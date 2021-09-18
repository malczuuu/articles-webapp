import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowseArticlePageComponent } from './pages/browse-article-page/browse-article-page.component';

@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticleCardComponent,
    CreateArticlePageComponent,
    BrowseArticlePageComponent,
  ],
  imports: [CommonModule, ArticlesRoutingModule, ReactiveFormsModule],
})
export class ArticlesModule {}
