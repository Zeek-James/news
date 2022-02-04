import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizzComponent } from './bizz.component';

describe('BizzComponent', () => {
  let component: BizzComponent;
  let fixture: ComponentFixture<BizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
