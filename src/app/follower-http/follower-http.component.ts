import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'follower-http',
  templateUrl: './follower-http.component.html',
  styleUrls: ['./follower-http.component.css']
})
export class FollowerHttpComponent implements OnInit {
  followers: any;

  constructor(private service: FollowerService) { }

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers(): void {
    this.service.getFollowers()
    .subscribe(followers => this.followers = followers)
  }

}
