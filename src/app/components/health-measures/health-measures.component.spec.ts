import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMeasuresComponent } from './health-measures.component';

describe('HealthMeasuresComponent', () => {
  let component: HealthMeasuresComponent;
  let fixture: ComponentFixture<HealthMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthMeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
