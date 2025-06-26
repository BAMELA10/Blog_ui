import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/core/apicall.service';
import { map, Observable, Subscriber } from 'rxjs';
import { Blog } from 'src/app/interface/Blog';
import { cleanedData } from 'src/app/post-module/Add-post/Add-post.component';
import { Console } from 'console';
import { ActivatedRoute, Router } from '@angular/router';
import { resolve } from 'dns';

@Component({
  selector: 'app-GetBlog',
  templateUrl: './GetBlog.component.html',
  styleUrls: ['./GetBlog.component.css']
})
export class GetBlogComponent implements OnInit {
  listBLog : Blog[] = [];
  constructor(private apiService:ApicallService, private route:ActivatedRoute) { }

  ngOnInit() {
    let array: any[] = [];
    this.apiService.getAllBlogForUser()
    .pipe(
      map(res => {
        let BlogKeys: (keyof Blog)[] = ['id', 'name', 'url'];
        let cleanedObj = {}
        for( let obj of res['items']) {
          cleanedObj = cleanedData<Blog>(obj, BlogKeys);
          array.push(cleanedObj);
        }
      })
    )
    .subscribe()
    let promise = new Promise((resolve) => {
      this.listBLog = array;
      if(this.listBLog.length != 0) {
        resolve(this.listBLog);
    }});
    
  }

}
