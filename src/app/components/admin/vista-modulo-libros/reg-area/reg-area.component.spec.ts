import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAreaComponent } from './reg-area.component';

describe('RegAreaComponent', () => {
  let component: RegAreaComponent;
  let fixture: ComponentFixture<RegAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
