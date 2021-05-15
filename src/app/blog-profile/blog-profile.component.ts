import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog-profile',
  templateUrl: './blog-profile.component.html',
  styleUrls: ['./blog-profile.component.css']
})
export class BlogProfileComponent implements OnInit {
  year: number;
  month: number;

  constructor(private route: ActivatedRoute,
    private router: Router ) {
      this.year = 0;
      this.month = 0;
     }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.year = Number(params?.get('year'));
    this.month = Number(params?.get('month'));
  }

  viewAll() {
    this.router.navigate(['/blogs']);
  }

}
