import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymodePageComponent } from './paymode-page.component';

describe('PaymodePageComponent', () => {
  let component: PaymodePageComponent;
  let fixture: ComponentFixture<PaymodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymodePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
