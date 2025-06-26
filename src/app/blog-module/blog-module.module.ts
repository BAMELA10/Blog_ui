import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BlogRoutingModule } from './blog.routing';
import { GetBlogComponent } from './GetBlog/GetBlog.component';
import { PostModuleModule } from '../post-module/post-module.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    MainMenuComponent,
    GetBlogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    BlogRoutingModule,
    SharedModule,
    PostModuleModule,
    
  ]
})
export class BlogModuleModule { }
