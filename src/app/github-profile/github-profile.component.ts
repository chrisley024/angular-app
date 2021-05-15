import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  profileName: string;
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.profileName = '';
    }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.profileName = String(params?.get('username'));
  }

}
