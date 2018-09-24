import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../../models/post';
import {NgForm} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  blogBody: string;
  blogTitle: string;
  @Output() postCreated$ = new EventEmitter<Post>();
  private mode = 'create';
  private postId: string;
  post: Post;

  constructor(private postService: PostService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    const post: Post = {id: '', title: postForm.value.blogTitle, content: postForm.value.blogBody};
    this.postService.savePost(post);
    this.postCreated$.emit(post);
    postForm.resetForm();
  }
}
