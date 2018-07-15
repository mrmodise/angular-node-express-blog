import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  savePost(post: Post) {
    this.http.post('', {});
  }

  listPosts() {
    return this.http.get<Post[]>('');
  }
}
