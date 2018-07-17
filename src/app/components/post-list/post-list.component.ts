import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Array<Post> = [];
  private postSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts();
    this.postSubscription = this.postService.getPostsUpdatedListener().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  onPostDelete(id: string) {
    this.postService.deletePost(id);
  }

  onEdit(id: string) {}
}
