import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {   }

   ngOnInit(): void {
    this.posts = [];
    this.service.getPosts()
    .subscribe(data => {
      this.posts = data
    }, 
    error => {
      throw error
    })
   }

  createPost(input: HTMLInputElement){
    let post = {id:'', title: input.value}
    input.value = ''

  this.service.createPost(post)
    .subscribe(response => {
      post.id = response.id;
      this.posts.splice(0, 0, post)
      console.log(response)
    }, 
    (error: Response) => {
      if (error.status === 404)
        alert('This post has already been deleted');
      else {
        throw error
      }
      
    })
  } 

  updatePost(post: any){
  this.service.updatePost(post)
    .subscribe(response => {
      console.log(response)
    }, error => {
      alert('An unexpected error occurred');
      console.log(error);
    })
  }

  deletePost(post: any){
  this.service.deletePost(post.id)
    .subscribe((response: any) => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    }, 
    (error: Response) => {
      if (error.status === 404)
        alert('This post has already been deleted');
      else {
        throw error;
      }
      
    });
  }

}
