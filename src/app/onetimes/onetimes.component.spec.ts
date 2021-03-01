import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetimesComponent } from './onetimes.component';

describe('OnetimesComponent', () => {
  let component: OnetimesComponent;
  let fixture: ComponentFixture<OnetimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
