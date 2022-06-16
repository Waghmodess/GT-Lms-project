import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferredFromMeComponent } from './referred-from-me.component';

describe('ReferredFromMeComponent', () => {
  let component: ReferredFromMeComponent;
  let fixture: ComponentFixture<ReferredFromMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferredFromMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferredFromMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
