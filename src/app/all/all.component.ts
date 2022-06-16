import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../data-service.service';
import { FreshComponent } from '../fresh/fresh.component';


import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  names: string[] = ['Enrolled', 'Not Called', 'ABC', 'XYZ'];
  userData: any;
  ds = new MyDataSource();

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
        this.ds = this.userData;
        // console.log(this.ds)
      },
      error: (err) => {
        alert("Error while fetching the userData")
      }
    })
  }
}

export class MyDataSource extends DataSource<string | undefined> {
  private length = 100000;
  private pageSize = 100;
  private cachedData = Array.from<string>({ length: this.length });
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<(string | undefined)[]>(this.cachedData);
  private subscription = new Subscription();

  connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        this.fetchPage(i);
      }
    }));
    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    // Use `setTimeout` to simulate fetching data from server.
    setTimeout(() => {
      this.cachedData.splice(page * this.pageSize, this.pageSize,
        ...Array.from({ length: this.pageSize })
          .map((_, i) => `userData${page * this.pageSize + i}`));
      this.dataStream.next(this.cachedData);
    }, Math.random() * 1000 + 200);
  }
}
