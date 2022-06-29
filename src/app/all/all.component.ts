import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';
import { FreshComponent } from '../fresh/fresh.component';

interface FilterOption {
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


  constructor(public dialog: MatDialog, private ser: DataServiceService) { }

  ngOnInit(): void {
    this.getAllData();
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
}