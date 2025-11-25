import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialeComponent } from './tutoriale.component';

describe('TutorialeComponent', () => {
  let component: TutorialeComponent;
  let fixture: ComponentFixture<TutorialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
