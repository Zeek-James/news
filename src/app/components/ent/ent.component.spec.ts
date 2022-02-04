import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntComponent } from './ent.component';

describe('EntComponent', () => {
  let component: EntComponent;
  let fixture: ComponentFixture<EntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
