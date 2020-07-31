import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegValoracionComponent } from './reg-valoracion.component';

describe('RegValoracionComponent', () => {
  let component: RegValoracionComponent;
  let fixture: ComponentFixture<RegValoracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegValoracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
