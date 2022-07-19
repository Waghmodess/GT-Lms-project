import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  _id: any;
  name: string;
  phoneNo: number;
  email: any;
  registrationNumber: any;
  state: string;
  city: string;
  dailyCommute: number;
  downPayment: string;
  vehicleMakeYear: any;
  vehicleType: string;
}

@Component({
  selector: 'app-my-followups',
  templateUrl: './my-followups.component.html',
  styleUrls: ['./my-followups.component.css']
})

export class MyFollowupsComponent implements OnInit {

  selected: Date | null;
  showFiller = false;
  userData: Dessert[] = [];
  EnquiryStatusOption: string[] = ['Follow-up', 'Enrolled', 'Fresh', 'Walking', 'In-Future', 'Won', 'Closed', 'Re-Enquired'];

  constructor(private api: DataServiceService) {
    this.userData = this.userData.slice();
  }

  sortData(sort: Sort) {
    const data = this.userData.slice();
    if (!sort.active || sort.direction === '') {
      this.userData = data;
      return;
    }
    this.userData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case '_id':
          return compare(a._id, b._id, isAsc);
        case 'state':
          return compare(a.state, b.state, isAsc);
        case 'city':
          return compare(a.city, b.city, isAsc);
        case 'vehicleMakeYear':
          return compare(a.vehicleMakeYear, b.vehicleMakeYear, isAsc);
        case 'vehicleType':
          return compare(a.vehicleType, b.vehicleType, isAsc);
        case 'registrationNumber':
          return compare(a.registrationNumber, b.registrationNumber, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.api.getData().subscribe({
      next: (res: any) => {
        this.userData = res.result;
      },
      error: (err) => {
        alert("Error while fetching the userData")
      }
    });
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}