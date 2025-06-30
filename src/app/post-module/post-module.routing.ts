import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './Add-post/Add-post.component';
import { GetBlogComponent } from '../blog-module/GetBlog/GetBlog.component';
import { GetPostComponent } from './GetPost/GetPost.component';

const routes: Routes = [
  {  
    path: '', component: PostComponent, // Links get all posts of blog
  },
  {
    path: "add", component: AddPostComponent // Link for add a New Post
  },
  {
    path: ":postId", component: GetPostComponent // Get a specific post 
  },
  {
    path: ":postId/delete", component: PostComponent // Get a specific post 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
//export const MyRouteRoutes = RouterModule.forChild(routes);
