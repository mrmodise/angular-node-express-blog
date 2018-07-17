import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

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
    return this.http
      .get<{ message: string, posts: any }>('/api/posts')
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe(transformedPosts => {
      this.posts = transformedPosts;
      this.postUpdated.next([...this.posts]);
    });
  }
}
