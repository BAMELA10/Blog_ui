import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './Add-post/Add-post.component';
import { PostRoutingModule } from './post-module.routing';
import { CKEditorComponent, CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent
    //CKEditorComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class PostModuleModule { }
