import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './blog-module/main-menu/main-menu.component';



const routes: Routes = [
  { path: 'home', component: MainMenuComponent },
  /* { path: 'posts', component: PostComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'Me', component:}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
