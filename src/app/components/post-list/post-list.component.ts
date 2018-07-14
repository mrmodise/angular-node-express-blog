import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Array<Post> = [];

  constructor() {
  }

  ngOnInit() {
  }

}
