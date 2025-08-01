import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BlogModuleModule } from './blog-module/blog-module.module';
import { MatIconModule } from '@angular/material/icon';
import { PostModuleModule } from './post-module/post-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    BlogModuleModule,
    MatIconModule,
    PostModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
