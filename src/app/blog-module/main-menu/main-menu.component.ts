import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public menubtn = [
    { name: 'Posts', link: '/posts', icon: 'article' },
    { name: 'Pages', link: '/pages', icon: 'web_stories' },
    { name: 'Comments', link: '/comments', icon: 'comment_bank' },
    { name: 'Profile', link: '/me', icon: 'person' }
  ]
  public nbPost = 12;
  public nbComment = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
