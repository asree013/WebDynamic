import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverEditComponent } from './waiver-edit.component';

describe('WaiverEditComponent', () => {
  let component: WaiverEditComponent;
  let fixture: ComponentFixture<WaiverEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
