import {   Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';




@Component({  // selector: 'app-navbar',
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit{

  @Input() username?: string;
  @Input() isPost?: boolean;
  @Input() BlogId?: string|null;
  
  public title = 'TestBlog';
  public menu :any[] = [];
  public urlAddPostLink = '';
  constructor() {
   
  }
  
  public ngOnInit(): void {
    console.log(this.BlogId);
    this.urlAddPostLink = '/blog/' + this.BlogId + '/posts/' + 'add';
    this.menu = [
      { name: 'Home', link: '/blog/' + this.BlogId + '/home' },
      { name: 'Posts', link: '/blog/' + this.BlogId + '/posts' },
      { name: 'Pages', link: '/blog/' + this.BlogId + '/pages' },
      { name: 'Comments', link: '/blog/' + this.BlogId + '/comments' },
      { name : 'Profile', link: '/blog/' + this.BlogId + '/Me' },
      { name: 'Logout', link: '/blog/' + this.BlogId + '/logout'}
    ]
  }

    
}

