import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './components/header/header.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostService} from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
