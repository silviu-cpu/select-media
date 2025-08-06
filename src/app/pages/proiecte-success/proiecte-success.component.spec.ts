import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteSuccessComponent } from './proiecte-success.component';

describe('ProiecteSuccessComponent', () => {
  let component: ProiecteSuccessComponent;
  let fixture: ComponentFixture<ProiecteSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteSuccessComponent]
    });
    fixture = TestBed.createComponent(ProiecteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
