import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialeComponent } from './testimoniale.component';

describe('TestimonialeComponent', () => {
  let component: TestimonialeComponent;
  let fixture: ComponentFixture<TestimonialeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialeComponent]
    });
    fixture = TestBed.createComponent(TestimonialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
