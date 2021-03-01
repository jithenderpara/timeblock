import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UphnSyncAsyncComponent } from './uphn-sync-async.component';

describe('UphnSyncAsyncComponent', () => {
  let component: UphnSyncAsyncComponent;
  let fixture: ComponentFixture<UphnSyncAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UphnSyncAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UphnSyncAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
