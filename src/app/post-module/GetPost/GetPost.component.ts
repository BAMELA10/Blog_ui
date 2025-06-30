import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from 'src/app/core/apicall.service';
import { HostListener} from '@angular/core';
import { Post } from 'src/app/interface/post';
import { map } from 'rxjs';
import { cleanedData } from '../Add-post/Add-post.component';


@Component({
  selector: 'app-GetPost',
  templateUrl: './GetPost.component.html',
  styleUrls: ['./GetPost.component.css']
})
export class GetPostComponent implements OnInit {

  public readOnly : boolean = true;
  public BlogId : string|null = this.route.snapshot.paramMap.get('id');
  public postId : string|null = this.route.snapshot.paramMap.get('postId');
  public data : string = "";
  public showFooter: boolean = false;
  public post!: Post;
  public title = "Details";
  public showChlid = false;
  constructor(private apiCallService: ApicallService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiCallService.getPost(this.BlogId, this.postId)
    .pipe(
      map(res => {
        let KeyPost:(keyof Post)[] = ['id','blog','title', 'content', 'author','published', 'updated'];
        let cleanedPost = cleanedData<Post>(res, KeyPost);
        return cleanedPost;
      })
    )
    .subscribe(data => {
      this.post = data;
      this.data = this.post.content;
      this.showChlid = true;
    }); 
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const footerVisible = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    this.showFooter = footerVisible;
  }
}
