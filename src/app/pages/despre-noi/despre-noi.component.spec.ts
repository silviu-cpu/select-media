import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreNoiComponent } from './despre-noi.component';

describe('DespreNoiComponent', () => {
  let component: DespreNoiComponent;
  let fixture: ComponentFixture<DespreNoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespreNoiComponent]
    });
    fixture = TestBed.createComponent(DespreNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
