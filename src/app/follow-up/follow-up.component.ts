import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css'],
})

export class FollowUpComponent implements OnInit {

  selected: Date | null;

  constructor() { }

  ngOnInit(): void {
  }

}