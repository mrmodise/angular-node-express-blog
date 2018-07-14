import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {title: 'Another post', content: 'tLorem ipsum dolor sit amet, consectetur ' +
      'adipisicing elit. Accusantium cupiditate fugit perspiciatis. Aliquam consectetur dictat'},
    {title: 'Another post1', content: 'dolorem dolorum ea eos excepturi itaque, ' +
      'labore minus modi neque obcaecati quaerat quis suscipit veniam.'},
    {title: 'Another post2', content: 'testing another post2'},
    {title: 'Another post3', content: 'testing another post3'},
    {title: 'Another post4', content: 'testing another post4'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
