import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {DownloadSpecComponent} from '../../shared/components/download-spec/download-spec.component';
declare var jQuery: any;


@Component({
  selector: 'app-floedesk-go',
  templateUrl: './floedesk-go.component.html',
  styleUrls: ['./floedesk-go.component.scss']
})
export class FloedeskGoComponent implements OnInit {
  innerWidth: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    setTimeout(() => {
      jQuery('video')[0].play();
    }, 100);
  }

  openSpecDialog() {
    let dialogRef = this.dialog.open(DownloadSpecComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    return false;
  }

}
