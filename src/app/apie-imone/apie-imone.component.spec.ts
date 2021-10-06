import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApieImoneComponent } from './apie-imone.component';

describe('ApieImoneComponent', () => {
  let component: ApieImoneComponent;
  let fixture: ComponentFixture<ApieImoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApieImoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApieImoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
