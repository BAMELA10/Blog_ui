import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetBlogComponent } from './GetBlog/GetBlog.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


const routes: Routes = [
  { path: '', component: GetBlogComponent },
  { path: ':id/home', component: MainMenuComponent },
  { path: ':id/posts', loadChildren: () => import('../post-module/post-module.module').then(i=>i.PostModuleModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule {};
