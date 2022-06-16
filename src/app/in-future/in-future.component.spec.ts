import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFutureComponent } from './in-future.component';

describe('InFutureComponent', () => {
  let component: InFutureComponent;
  let fixture: ComponentFixture<InFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
