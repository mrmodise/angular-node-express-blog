import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post';
import {NgForm} from '@angular/forms';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  blogBody: string;
  blogTitle: string;
  @Output() postCreated$ = new EventEmitter<Post>();

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    const post: Post = {title: postForm.value.blogTitle, content: postForm.value.blogBody};
    this.postService.savePost(post);
    this.postCreated$.emit(post);
  }
}
