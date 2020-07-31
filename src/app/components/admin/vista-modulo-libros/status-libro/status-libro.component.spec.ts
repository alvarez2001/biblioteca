import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLibroComponent } from './status-libro.component';

describe('StatusLibroComponent', () => {
  let component: StatusLibroComponent;
  let fixture: ComponentFixture<StatusLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
