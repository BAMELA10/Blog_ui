import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from 'src/app/core/apicall.service';
import { Post } from 'src/app/interface/post';
import { map } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

 /*  public menubtn = [
    { name: 'Posts', link: '/post', icon: '' },
    { name: 'Pages', link: '/pages', icon: 'web_stories' },
    { name: 'Comments', link: '/comments', icon: 'comment_bank' },
    { name: 'Profile', link: '/me', icon: 'person' }
  ] */
  public nbPost!: number;
  public nbComment!: number;
  public showFooter = false
  public BlogId : string|null = this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute, private apiCallservice: ApicallService) { }

  ngOnInit(): void {
    let array: any[] = [];
    let arrayComent: any[] = [];
    let commentNumber = 0;

    // Get number of post for this Blog
    if (this.BlogId) {
      this.apiCallservice.getAllPost(this.BlogId)
      .pipe(
        map(res => {
          array = res["items"];
          this.nbPost = array.length;

          // Get number of all comments for this Blog
          if(this.nbPost != 0){
            array.forEach(post => {
              let id =  post["id"] || post.id;
              this.apiCallservice.getAllCommentForPost(this.BlogId,id)
              .pipe(
                map(res => {
                  arrayComent = res["items"];
                  commentNumber += arrayComent.length;
                  this.nbComment = commentNumber;
                })
              )
              .subscribe()
            })
          }
        })
      )
      .subscribe();
    }
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    const footerVisible = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    this.showFooter = footerVisible;
}

}
