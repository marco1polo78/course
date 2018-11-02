import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcityComponent } from './newcity.component';

describe('NewcityComponent', () => {
  let component: NewcityComponent;
  let fixture: ComponentFixture<NewcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
