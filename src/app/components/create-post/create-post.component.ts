import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  blogBody: string;
  blogTitle: string;
  @Output() postCreated$ = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    const post: Post = {title: this.blogTitle, content: this.blogBody};
    this.postCreated$.emit(post);
  }
}
