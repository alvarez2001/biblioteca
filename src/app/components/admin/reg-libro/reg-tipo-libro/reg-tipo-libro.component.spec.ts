import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTipoLibroComponent } from './reg-tipo-libro.component';

describe('RegTipoLibroComponent', () => {
  let component: RegTipoLibroComponent;
  let fixture: ComponentFixture<RegTipoLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegTipoLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTipoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
