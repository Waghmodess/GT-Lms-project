import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';
import { FreshComponent } from '../fresh/fresh.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface FilterOption {
  value: string;
  viewValue: string;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})

export class AllComponent implements OnInit {
  EnquiryStatusOption: string[] = ['Enrolled', 'Fresh', 'Follow-up', 'Walking', 'In-Future', 'Won', 'Closed', 'Re-Enquired'];
  userData: any;
  isButtonVisible = true;
  showFiller = false;

  statusFilter: FilterOption[] = [
    { value: '0', viewValue: 'Active' },
    { value: '1', viewValue: 'Pending' },
    { value: '1', viewValue: 'Completed' },
  ];

  enquiryFilter: FilterOption[] = [
    { value: '0', viewValue: 'Website' },
    { value: '1', viewValue: 'Social Media' },
    { value: '2', viewValue: 'Offline Type' },
  ];

  vehicalFilter: FilterOption[] = [
    { value: '0', viewValue: 'Honda Activa' },
    { value: '1', viewValue: 'Honda Dio' },
    { value: '2', viewValue: 'Suzuki Access' },
    { value: '3', viewValue: 'Hero Maestro' },
    { value: '4', viewValue: 'Hero Splendor' },
    { value: '5', viewValue: 'Hero HF Deluxe' },
  ];

  stateFilter: FilterOption[] = [
    { value: '0', viewValue: 'Maharashtra' },
    { value: '1', viewValue: 'Karnataka' },
    { value: '2', viewValue: 'Rajasthan' },
    { value: '3', viewValue: 'Tamil Nadu' },
    { value: '4', viewValue: 'Telangana' },
  ];

  cityFilter: FilterOption[] = [
    { value: '0', viewValue: 'Mumbai' },
    { value: '1', viewValue: 'Pune' },
    { value: '2', viewValue: 'Bengaluru' },
    { value: '3', viewValue: 'Chennai' },
    { value: '4', viewValue: 'Delhi' },
  ];

  // Form Validation:-
  addData: FormGroup;
  submitted: boolean = false;
  name: FormControl;
  phoneNo: FormControl;
  email: FormControl;
  city: FormControl;
  deciveId: FormControl;
  ride: FormControl;

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

  constructor(public dialog: MatDialog, private ser: DataServiceService) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    this.getAllData();
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

  openDialog() {
    this.dialog.open(FreshComponent, { width: '600px' }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllData();
      }
    })
  }


  getAllData() {
    this.ser.getData().subscribe({
      next: (res: any) => {
        this.userData = res.result;
      },
      error: (err) => {
        alert("Error while fetching the userData")
      }
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
          this.getAllData();
          this.addData.reset();
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
        // this.addData.close();
      }
    });
  }
  onReset() {
    this.addData.reset();
  }
}