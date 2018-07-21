import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {PostListComponent} from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: CreatePostComponent}
  // {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
