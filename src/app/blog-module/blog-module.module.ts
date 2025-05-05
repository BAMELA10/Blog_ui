import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DashBoardComponent } from './MainMenu/dash-board/dash-board.component';
import { DashboardComponent } from './main-menu/dashboard/dashboard.component';



@NgModule({
  declarations: [
    BlogComponent,
    MainMenuComponent,
    DashBoardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModuleModule { }
