import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';
import { BrowseArticlePageComponent } from './pages/browse-article-page/browse-article-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: 'browse', component: ArticlesPageComponent },
  { path: 'browse/:article', component: BrowseArticlePageComponent },
  { path: 'create', component: CreateArticlePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
