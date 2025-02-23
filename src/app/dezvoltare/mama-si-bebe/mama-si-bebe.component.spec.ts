import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamaSiBebeComponent } from './mama-si-bebe.component';

describe('MamaSiBebeComponent', () => {
  let component: MamaSiBebeComponent;
  let fixture: ComponentFixture<MamaSiBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MamaSiBebeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MamaSiBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
