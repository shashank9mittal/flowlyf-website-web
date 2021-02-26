import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DownloadSpecComponent } from 'src/app/shared/components/download-spec/download-spec.component';
import { ScheduleCallComponent } from 'src/app/shared/components/schedule-call/schedule-call.component';

declare var jQuery: any;

@Component({
  selector: 'app-flowdesk',
  templateUrl: './flowdesk.component.html',
  styleUrls: ['./flowdesk.component.scss']
})
export class FlowdeskComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery(document).ready(function () { //Photos Gallery
      jQuery(".fancybox").fancybox();
    });
  }
  ngOnDestroy() {
    jQuery(".fancybox").unbind('click.fb');
    // or maybe jQuery(".fancybox").off() to remove all bindings
  }

  scheduleCall() {
    let dialogRef = this.dialog.open(ScheduleCallComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    return false;
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
