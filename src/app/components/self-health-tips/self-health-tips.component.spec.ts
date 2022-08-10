import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfHealthTipsComponent } from './self-health-tips.component';

describe('SelfHealthTipsComponent', () => {
  let component: SelfHealthTipsComponent;
  let fixture: ComponentFixture<SelfHealthTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfHealthTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfHealthTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
