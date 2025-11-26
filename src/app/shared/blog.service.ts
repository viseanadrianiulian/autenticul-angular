import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { ArticleResponse, ArticlesResponse, CategoriesResponse } from './responses/articles.response';
import { Article } from './blog/article';
import { IResponse } from './generic.response';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    private getArticlesUrl = this.sharedService.baseUrl + 'api/blog/articles/';
    private getCategoriesUrl = this.sharedService.baseUrl + 'api/blog/categories/all';
    private getSingleArticleUrl = this.sharedService.baseUrl + 'api/blog/articles/single/';
    private createArticleUrl = this.sharedService.baseUrl + 'api/blog/articles/create';

    constructor(private http: HttpClient, private sharedService: SharedService){ }



  getArticles(category: string): Observable<ArticlesResponse> {
        return this.http.get<ArticlesResponse>(this.getArticlesUrl + category)
          .pipe(
            catchError(this.sharedService.handleError)
          )
      }

      getCategories(): Observable<CategoriesResponse> {
        return this.http.get<CategoriesResponse>(this.getCategoriesUrl)
        .pipe(
          catchError(this.sharedService.handleError)
        )
      }

      getArticleByTitle(articleTitle: string): Observable<ArticleResponse> {
        return this.http.get<ArticleResponse>(this.getSingleArticleUrl + articleTitle)
        .pipe(
          catchError(this.sharedService.handleError)
        )
      }

      createArticle(article: Article): Observable<IResponse> {
        return this.http.post<IResponse>(this.createArticleUrl, article);
      }
}
