import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelShowmoreComponent } from './label-showmore.component';

describe('LabelShowmoreComponent', () => {
  let component: LabelShowmoreComponent;
  let fixture: ComponentFixture<LabelShowmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelShowmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelShowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
