import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-showmore',
  templateUrl: './label-showmore.component.html',
  styleUrls: ['./label-showmore.component.css']
})
export class LabelShowmoreComponent implements OnInit {

  @Input() text: string;
  @Input() wordLimit: number;
  showMore: boolean;

  constructor() {
    this.showMore = false;
  }

  ngOnInit(): void {
  }

}