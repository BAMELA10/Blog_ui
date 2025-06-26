import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http: HttpClient) { }

  public getAllPost() {
    //
  }
  public getAllPages() {
    //
  }

  public getAllComment() {
    //
  }
}
