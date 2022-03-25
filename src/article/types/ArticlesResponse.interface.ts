import { ArticleEntity } from '../article.entity';

export interface ArticlesResponseInterface {
  articles: Array<ArticleEntity>;
  articlesCount: number;
}
