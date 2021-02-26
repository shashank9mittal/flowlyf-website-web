import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-download-spec-thankyou',
  templateUrl: './download-spec-thankyou.component.html',
  styleUrls: ['./download-spec-thankyou.component.scss']
})
export class DownloadSpecThankyouComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      FileSaver.saveAs(window.location.origin + "/assets/The%20FlowDesk%20Spec%20Sheet.pdf", "The FlowDesk Spec Sheet");
      // setTimeout(() => {
      //   window.open(window.location.origin + "/assets/The%20FlowDesk%20Spec%20Sheet.pdf");
      // }, 2000);
    }
  }

}
