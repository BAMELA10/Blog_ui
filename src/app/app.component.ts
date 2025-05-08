import { Component } from '@angular/core';
import { ViewContainerRef  } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  public isLoggedIn: boolean = true;
  public isPost: boolean = true;
  public username = 'TestUser';
  
  title = 'Blog_ui';
}
