import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIdiomaComponent } from './editar-idioma.component';

describe('EditarIdiomaComponent', () => {
  let component: EditarIdiomaComponent;
  let fixture: ComponentFixture<EditarIdiomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarIdiomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
