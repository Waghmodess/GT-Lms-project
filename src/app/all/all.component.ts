import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';
import { FreshComponent } from '../fresh/fresh.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  names: string[] = ['Enrolled', 'Not Called', 'ABC', 'XYZ'];
  userData: any;

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
        // console.log(res)
        // console.log(res.result)
        this.userData = res.result;
        console.log(this.userData);
        // console.log(this.ds)
      },
      error: (err) => {
        alert("Error while fetching the userData")
      }
    })
  }
}