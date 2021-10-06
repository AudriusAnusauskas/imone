import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusuDarbaiComponent } from './musu-darbai.component';

describe('MusuDarbaiComponent', () => {
  let component: MusuDarbaiComponent;
  let fixture: ComponentFixture<MusuDarbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusuDarbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusuDarbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
