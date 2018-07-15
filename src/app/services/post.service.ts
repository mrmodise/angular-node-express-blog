import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Array<Post> = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {
  }

  savePost(post: Post) {
    console.log(`Post data ${JSON.stringify(post)}`);
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }

  getPostsUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  getPosts() {
    return [...this.posts];
  }
}
