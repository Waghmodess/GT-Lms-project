import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DripMarketingComponent } from './drip-marketing.component';

describe('DripMarketingComponent', () => {
  let component: DripMarketingComponent;
  let fixture: ComponentFixture<DripMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DripMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DripMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
