import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public menubtn = [
    { name: 'Posts', link: '/posts', icon: 'web' },
    { name: 'Pages', link: '/pages', icon: 'fa-solid fa-file' },
    { name: 'Comments', link: '/comments', icon: 'fa-solid fa-comment' },
    { name: 'Me', link: '/me', icon: 'fa-solid fa-user' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
