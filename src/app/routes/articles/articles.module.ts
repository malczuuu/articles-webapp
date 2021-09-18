import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';

@NgModule({
  declarations: [ArticlesPageComponent, ArticleCardComponent, CreateArticlePageComponent],
  imports: [CommonModule, ArticlesRoutingModule],
})
export class ArticlesModule {}
