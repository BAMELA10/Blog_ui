import { Component, OnInit } from '@angular/core';
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

  public menubtn = [
    { name: 'Posts', link: '/post', icon: 'article' },
    { name: 'Pages', link: '/pages', icon: 'web_stories' },
    { name: 'Comments', link: '/comments', icon: 'comment_bank' },
    { name: 'Profile', link: '/me', icon: 'person' }
  ]
  public nbPost = 12;
  public nbComment = 10;

  constructor(private route:ActivatedRoute, private apiCallservice: ApicallService) { }

  ngOnInit(): void {
    let BlogId = this.route.snapshot.paramMap.get('id');
    let array = [] ;
    if (!BlogId) {
      this.apiCallservice.getAllPost(BlogId)
      .pipe(
        map(res => {
          array = res["items"];
        })
      )
      .subscribe();
      this.nbPost = array.length;

    }
  }

}
