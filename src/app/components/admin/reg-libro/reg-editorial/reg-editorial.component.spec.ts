import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEditorialComponent } from './reg-editorial.component';

describe('RegEditorialComponent', () => {
  let component: RegEditorialComponent;
  let fixture: ComponentFixture<RegEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
