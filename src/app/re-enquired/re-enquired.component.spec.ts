import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEnquiredComponent } from './re-enquired.component';

describe('ReEnquiredComponent', () => {
  let component: ReEnquiredComponent;
  let fixture: ComponentFixture<ReEnquiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReEnquiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReEnquiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
