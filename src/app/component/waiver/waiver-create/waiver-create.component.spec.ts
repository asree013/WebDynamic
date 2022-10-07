import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverCreateComponent } from './waiver-create.component';

describe('WaiverCreateComponent', () => {
  let component: WaiverCreateComponent;
  let fixture: ComponentFixture<WaiverCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiverCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
