import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveThingsFormComponent } from './positive-things-form.component';

describe('PositiveThingsFormComponent', () => {
  let component: PositiveThingsFormComponent;
  let fixture: ComponentFixture<PositiveThingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveThingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveThingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
