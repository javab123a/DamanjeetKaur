import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultuserComponent } from './resultuser.component';

describe('ResultuserComponent', () => {
  let component: ResultuserComponent;
  let fixture: ComponentFixture<ResultuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
