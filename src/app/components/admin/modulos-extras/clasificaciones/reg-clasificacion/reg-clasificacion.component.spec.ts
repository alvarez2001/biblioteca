import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClasificacionComponent } from './reg-clasificacion.component';

describe('RegClasificacionComponent', () => {
  let component: RegClasificacionComponent;
  let fixture: ComponentFixture<RegClasificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegClasificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
