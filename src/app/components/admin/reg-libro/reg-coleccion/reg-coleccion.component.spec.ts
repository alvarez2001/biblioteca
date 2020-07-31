import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegColeccionComponent } from './reg-coleccion.component';

describe('RegColeccionComponent', () => {
  let component: RegColeccionComponent;
  let fixture: ComponentFixture<RegColeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegColeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
