import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './blog-module/main-menu/main-menu.component';
import { BlogModuleModule } from './blog-module/blog-module.module';



const routes: Routes = [
  { path: "blog", loadChildren: () => import('./blog-module/blog-module.module').then(i=>i.BlogModuleModule)}
    /* 
  { path: 'pages', component: PagesComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'Me', component:}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
