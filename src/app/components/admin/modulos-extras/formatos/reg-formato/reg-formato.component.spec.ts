import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFormatoComponent } from './reg-formato.component';

describe('RegFormatoComponent', () => {
  let component: RegFormatoComponent;
  let fixture: ComponentFixture<RegFormatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegFormatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
