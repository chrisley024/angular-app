import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.css']
})
export class BlogArchiveComponent {
blogs = [
  {year: 2017, month: 1},
  {year: 2017, month: 2},
  {year: 2017, month: 3},
];
  constructor() { }
}
