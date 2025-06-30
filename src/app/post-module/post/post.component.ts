import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApicallService } from 'src/app/core/apicall.service';
import { Post } from 'src/app/interface/post';
import { cleanedData } from '../Add-post/Add-post.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public PageTitle = " List of Posts";
  public ListOfPost : Post[] = [];
  public BlogId : string|null = this.route.snapshot.paramMap.get('id');
  public showFooter : boolean = false;

  constructor(private apiCallService : ApicallService, private route: ActivatedRoute) { }


  ngOnInit() {
    let array: any[] = [];
    this.apiCallService.getAllPost(this.BlogId)
    .pipe(
      map(
        res => {
          let KeyPost: (keyof Post)[] = ['id','blog','title','content','author','published','updated'];
          let cleanedObj = {};
          for( let item of res['items'])
          {
            cleanedObj = cleanedData<Post>(item, KeyPost);
            array.push(cleanedObj);
          }
        }
      )
    )
    .subscribe()
    this.ListOfPost = array;
  }

  @HostListener('window:scroll', [])
    onScroll(): void {
      const footerVisible = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      this.showFooter = footerVisible;
  }

}
