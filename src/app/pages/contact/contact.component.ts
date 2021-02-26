import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ScheduleCallComponent } from 'src/app/shared/components/schedule-call/schedule-call.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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

}
