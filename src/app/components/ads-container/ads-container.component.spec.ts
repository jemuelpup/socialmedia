import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsContainerComponent } from './ads-container.component';

describe('AdsContainerComponent', () => {
  let component: AdsContainerComponent;
  let fixture: ComponentFixture<AdsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
