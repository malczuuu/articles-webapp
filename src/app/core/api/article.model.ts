export interface Article {
  id: string;
  title: string;
  content: string;
  last_modified_date: string;
}

export interface ArticleCreate {
  title: string;
  content: string;
}

export interface ArticleUpdate {
  title: string;
  content: string;
}
