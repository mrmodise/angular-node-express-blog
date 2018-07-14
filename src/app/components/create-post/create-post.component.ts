import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  blogBody: string;
  blogTitle: string;
  @Output() postCreated$ = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onAddPost() {
    const post = {title: this.blogTitle, content: this.blogBody};
    this.postCreated$.emit(post);
  }
}
