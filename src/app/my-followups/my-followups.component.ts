import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-my-followups',
  templateUrl: './my-followups.component.html',
  styleUrls: ['./my-followups.component.css']
})
export class MyFollowupsComponent implements OnInit {

  selected: Date | null;
  showFiller = false;
  userData: any;
  EnquiryStatusOption: string[] = ['Follow-up', 'Enrolled', 'Fresh', 'Walking', 'In-Future', 'Won', 'Closed', 'Re-Enquired'];
  search: any; // For Filtering Data;

  constructor(private api: DataServiceService) { }

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