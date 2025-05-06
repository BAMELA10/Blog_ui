import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isLoggedIn: boolean = false;

  public menuItems = [
    { name: 'Blog', icon: 'article', route: '/blog' },
    { name: 'Posts', icon: 'info', route: '/about' },
    { name: 'Comments', icon: 'comment', route: '/comments' },
    { name: 'Pages', icon: 'pages', route: '/pages' },
    { name: 'Get Blog', icon: 'get_app', route: '/get-blog' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
