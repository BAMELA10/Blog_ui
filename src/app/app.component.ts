import { Component } from '@angular/core';
import { ViewContainerRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean = true;
  
  title = 'Blog_ui';
}
