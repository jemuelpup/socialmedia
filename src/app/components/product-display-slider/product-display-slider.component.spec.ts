import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplaySliderComponent } from './product-display-slider.component';

describe('ProductDisplaySliderComponent', () => {
  let component: ProductDisplaySliderComponent;
  let fixture: ComponentFixture<ProductDisplaySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplaySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplaySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
