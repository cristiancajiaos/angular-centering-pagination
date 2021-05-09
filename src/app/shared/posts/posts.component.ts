import { PostService } from './../services/post.service';
import { Post } from './../interfaces/post';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  currentPage = 1;

  constructor(
    private post: PostService
  ) { }

  ngOnInit() {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
