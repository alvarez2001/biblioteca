import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAutorComponent } from './reg-autor.component';

describe('RegAutorComponent', () => {
  let component: RegAutorComponent;
  let fixture: ComponentFixture<RegAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
