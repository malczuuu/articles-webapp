export interface Article {
  id: string;
  content: string;
  last_modified_date: string;
}

export interface ArticleCreate {
  content: string;
}

export interface ArticleUpdate {
  content: string;
}
