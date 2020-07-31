import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMateriasComponent } from './editar-materias.component';

describe('EditarMateriasComponent', () => {
  let component: EditarMateriasComponent;
  let fixture: ComponentFixture<EditarMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
