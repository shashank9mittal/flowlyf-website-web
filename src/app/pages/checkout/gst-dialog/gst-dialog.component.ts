import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gst-dialog',
  templateUrl: './gst-dialog.component.html',
  styleUrls: ['./gst-dialog.component.scss']
})
export class GstDialogComponent implements OnInit {

  public gstForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<GstDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    console.log(data);
  }

  ngOnInit() {
    const gstInfo = this.data.gstInfo;
    this.gstForm = new FormGroup({
      number: new FormControl(gstInfo.number || "", Validators.required),
      company: new FormControl(gstInfo.company || "", Validators.required),
      address: new FormControl(gstInfo.address || "", Validators.required),
      same: new FormControl(gstInfo.same || false),
    });
  }

  closeDialog() {
    this.dialogRef.close(this.gstForm.value);
  }

  submitGST() {
    if (this.gstForm.valid) {
      this.dialogRef.close(this.gstForm.value);
    }
  }

  onChangeSame() {
    if(this.gstForm.value.same) {
      this.gstForm.patchValue({
        address: this.data.details.addressLineOne || "",
      });
    }
  }
}
