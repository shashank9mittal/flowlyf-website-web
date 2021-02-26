import { Component, OnInit } from '@angular/core';
import { BlogsListing } from './blogs-schema/blogs-schema-listing';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs = [];

  constructor() {
    this.blogs = JSON.parse(JSON.stringify(BlogsListing));
    console.log(this.blogs);
  }

  ngOnInit() { }

}
