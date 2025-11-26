import { Article } from "../blog/article";
import { Category } from "../blog/category";
import { IResponse } from "../generic.response";


export interface ArticlesResponse extends IResponse {
    articles : Article[];
  }

  export interface ArticleResponse extends IResponse {
    article : Article;
  }

  export interface CategoriesResponse extends IResponse {
    categories : Category[];
  }