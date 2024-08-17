import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudDescriptionComponent } from './proud-description.component';

describe('ProudDescriptionComponent', () => {
  let component: ProudDescriptionComponent;
  let fixture: ComponentFixture<ProudDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProudDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProudDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
