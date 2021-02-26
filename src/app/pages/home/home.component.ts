import { AfterViewInit, Component, OnDestroy, OnInit, HostListener } from '@angular/core';

declare var jQuery: any;
import { MatDialog } from '@angular/material';
import { DownloadSpecComponent } from 'src/app/shared/components/download-spec/download-spec.component';
import { ScheduleCallComponent } from 'src/app/shared/components/schedule-call/schedule-call.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  innerWidth: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    setTimeout(() => {
      jQuery('video')[0].play();
    }, 100);
  }

  ngAfterViewInit() {
    jQuery(".fancybox").fancybox({
      fitToView: false
    });
  }
  ngOnDestroy() {
    jQuery(".fancybox").unbind('click.fb');
    // or maybe jQuery(".fancybox").off() to remove all bindings
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
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
