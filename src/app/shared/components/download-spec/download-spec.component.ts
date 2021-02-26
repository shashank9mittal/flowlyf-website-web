import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-download-spec',
  templateUrl: './download-spec.component.html',
  styleUrls: ['./download-spec.component.scss']
})
export class DownloadSpecComponent implements OnInit {

  public downloadSpecForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DownloadSpecComponent>,
    private apiService: ApiService,
    private router: Router) {
  }

  ngOnInit() {
    this.downloadSpecForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
    });
  }

  closeDialog() { }

  submitForm() {
    if (this.downloadSpecForm.valid) {
      let params = this.downloadSpecForm.value;
      this.dialogRef.close(this.downloadSpecForm.value);
      this.apiService.api("createLead", this.downloadSpecForm.value).then(res => {
        this.router.navigate(['download-spec-thankyou']);
      }, err => {

      })
    }
  }

}
