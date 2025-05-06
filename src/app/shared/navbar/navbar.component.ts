import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({  // selector: 'app-navbar',
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() username?: string;
  public title = 'TestBlog';
  constructor() { }

  public Search() {
    console.log('Search');
  }

}
