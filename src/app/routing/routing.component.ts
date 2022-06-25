import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  @ViewChild(MatSidenav)
  leftSidenav!: MatSidenav;

  @ViewChild(MatSidenav)
  rightSidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.leftSidenav.mode = 'over';
          this.leftSidenav.close();
        } else {
          this.leftSidenav.mode = 'side';
          this.leftSidenav.open();
        }
      });
    }, 0.000);

    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.rightSidenav.mode = 'over';
          this.rightSidenav.close();
        } else {
          this.rightSidenav.mode = 'side';
          this.rightSidenav.open();
        }
      });
    }, 0.000);
  }
}