import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
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
  sidenav!: MatSidenav;

  // 1]
  // isFixedNavbar: any;
  // @HostBinding('class.navbar-opened') navbarOpened = false;

  // 2]
  isMenuOpen = false

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void { }

  // 1]

  // toggleNavbar() {
  //   this.navbarOpened = !this.navbarOpened;
  // }
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (offset > 10) {
  //     this.isFixedNavbar = true;
  //   } else {
  //     this.isFixedNavbar = false;
  //   }
  // }

  // 2]
  toggleMenu(): void { 
    this.isMenuOpen = !this.isMenuOpen;
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }, 0.000);
  }
}