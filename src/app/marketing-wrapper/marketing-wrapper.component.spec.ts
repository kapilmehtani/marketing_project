import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingWrapperComponent } from './marketing-wrapper.component';

describe('MarketingWrapperComponent', () => {
  let component: MarketingWrapperComponent;
  let fixture: ComponentFixture<MarketingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
