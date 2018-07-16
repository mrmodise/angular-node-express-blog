import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Array<Post> = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {
  }

  savePost(post: Post) {

    this.http.post('/api/post/create', post).subscribe((res) => {
      console.log(res);
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
    });
  }

  getPostsUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  getPosts() {
    return this.http.get<{ message: string, posts: Post[] }>('/api/posts').subscribe(data => {
      this.posts = data.posts;
      this.postUpdated.next([...this.posts]);
    });
  }
}
