import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule

  ]
})
export class BlogModuleModule { }
