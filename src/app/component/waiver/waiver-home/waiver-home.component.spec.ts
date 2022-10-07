import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverHomeComponent } from './waiver-home.component';

describe('WaiverHomeComponent', () => {
  let component: WaiverHomeComponent;
  let fixture: ComponentFixture<WaiverHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
