import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEditorialComponent } from './modificar-editorial.component';

describe('ModificarEditorialComponent', () => {
  let component: ModificarEditorialComponent;
  let fixture: ComponentFixture<ModificarEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
