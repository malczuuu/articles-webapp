import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'browse' },
  { path: 'browse', component: ArticlesPageComponent },
  { path: 'create', component: CreateArticlePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
