import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogriesComponent } from './catogries.component';

describe('CatogriesComponent', () => {
  let component: CatogriesComponent;
  let fixture: ComponentFixture<CatogriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatogriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
