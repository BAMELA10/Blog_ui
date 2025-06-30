import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interface/post';
import { Blog } from '../interface/Blog';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http: HttpClient) { }

  Uri = "https://www.googleapis.com/blogger/v3/";
  blogId = "5933710366875701709";
  params = new HttpParams().set('key', environment.apiKey);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.tokenAPI,
  })
  

  public newPost(post:any): Observable<Post> {
    return this.http.post<Post>(this.Uri +"blogs/"+ this.blogId + "/posts/" , post, { headers: this.headers, params: this.params});
  }

  public getAllBlogForUser(): Observable<any>
  {
    return this.http.get<any>(this.Uri + "users/self/blogs", { headers: this.headers});
  }

  public getAllPost(BlogId:string|null):Observable<any> {
    let terminaison = "blogs/" + BlogId + "/posts";
    return this.http.get<any>(this.Uri + terminaison, { headers: this.headers})
  }

  public getPost(BlogId:string|null, postId:string|null): Observable<Post> {
    let terminaison = "blogs/" + BlogId + "/posts" + "/" + postId;
    return this.http.get<any>(this.Uri + terminaison, { headers: this.headers})
  }

  public DeletePost(BlogId:string|null, postId:string|null): Observable<Post> {
    let terminaison = "blogs/" + BlogId + "/posts" + "/" + postId;
    return this.http.delete<any>(this.Uri + terminaison, { headers: this.headers})
  }
  public getAllPages() {
    //
  }

  public getAllComment() {
    //
  }
}
