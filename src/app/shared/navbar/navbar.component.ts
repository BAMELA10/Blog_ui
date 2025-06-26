import {   Component} from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';




@Component({  // selector: 'app-navbar',
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {

  @Input() username?: string;
  @Input() isPost?: boolean;
  
  public title = 'TestBlog';
  public menu = [
    { name: 'Home', link: '/home' },
    { name: 'Posts', link: '/posts' },
    { name: 'Pages', link: '/pages' },
    { name: 'Comments', link: '/comments' },
    { name : 'Profile', link: '/Me' },
    { name: 'Logout', link: '/logout' }

  ];
  
  constructor() {
   
  }
  
  public Search() {
    console.log('Search');
  }

    
}

