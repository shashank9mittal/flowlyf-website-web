import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDetails } from '../blogs-schema/blogs-schema-listing-details';


@Component({
  selector: 'app-blogs-detail',
  templateUrl: './blogs-detail.component.html',
  styleUrls: ['./blogs-detail.component.scss']
})
export class BlogsDetailComponent implements OnInit {

  article: any = {};

  constructor(private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    const items = JSON.parse(JSON.stringify(BlogDetails));
    this.article = items[params.blogId-1];
  }

  ngOnInit() { }

}
