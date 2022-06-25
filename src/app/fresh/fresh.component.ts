import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2'

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fresh',
  templateUrl: './fresh.component.html',
  styleUrls: ['./fresh.component.css']
})
export class FreshComponent implements OnInit {
  addData: FormGroup;
  submitted: boolean = false;
  name: FormControl;
  phoneNo: FormControl;
  email: FormControl;
  city: FormControl;
  deciveId: FormControl;
  ride: FormControl;
  userData: any;

  cites: Food[] = [
    { value: 'Mumbai', viewValue: 'Mumbai' },
    { value: 'Pune', viewValue: 'Pune' },
    { value: 'Bengaluru', viewValue: 'Bengaluru' },
    { value: 'Chennai', viewValue: 'Chennai' },
    { value: 'Delhi', viewValue: 'Delhi' },
  ];
  rides: Food[] = [
    { value: 'Honda Activa', viewValue: 'Honda Activa' },
    { value: 'Honda Dio', viewValue: 'Honda Dio' },
    { value: 'Suzuki Access', viewValue: 'Suzuki Access' },
    { value: 'Hero Maestro', viewValue: 'Hero Maestro' },
    { value: 'Hero Splendor', viewValue: 'Hero Splendor' },
    { value: 'Hero HF Deluxe', viewValue: 'Hero HF Deluxe' },
    { value: 'Hero Passion', viewValue: 'Hero Passion' },
    { value: 'Other', viewValue: 'Other' },
  ];

  constructor(private ser: DataServiceService, private dialog: MatDialogRef<FreshComponent>) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', [
      Validators.required
    ]);

    this.phoneNo = new FormControl('', [
      Validators.required
    ]);

    this.email = new FormControl('', [
      Validators.required, Validators.email
    ]);

    this.deciveId = new FormControl('', [
      Validators.required
    ]);

    this.city = new FormControl('', [
      Validators.required
    ]);

    this.ride = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.addData = new FormGroup({
      name: this.name,
      phoneNo: this.phoneNo,
      email: this.email,
      city: this.city,
      ride: this.ride,
      deciveId: this.deciveId,
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addData.valid) {
      this.ser.addUser(this.addData.value).subscribe({
        next: (res) => {
          this.userData = res;
          Swal.fire({
            title: "Thank You",
            text: "Data Submitted Successfully",
            icon: "success",
            confirmButtonText: 'Okay',
          });
          this.dialog.close("save");
        },
      });
    }
    else {
      Swal.fire({
        title: "Sorry... ",
        text: "Please Enter All Fields",
        icon: "error",
        confirmButtonText: 'Okay'
      })
      return;
    }
  }

  onClose() {
    Swal.fire({
      title: 'Are you sure',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Go Back',
    }).then((result) => {
      if (result.value == true) {
        this.dialog.close();
      }
    });
  }
  onReset() {
    this.addData.reset();
  }
}