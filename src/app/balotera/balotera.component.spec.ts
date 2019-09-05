import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaloteraComponent } from './balotera.component';

describe('BaloteraComponent', () => {
  let component: BaloteraComponent;
  let fixture: ComponentFixture<BaloteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaloteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaloteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
