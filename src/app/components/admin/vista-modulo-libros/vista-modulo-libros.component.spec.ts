import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaModuloLibrosComponent } from './vista-modulo-libros.component';

describe('VistaModuloLibrosComponent', () => {
  let component: VistaModuloLibrosComponent;
  let fixture: ComponentFixture<VistaModuloLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaModuloLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaModuloLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
