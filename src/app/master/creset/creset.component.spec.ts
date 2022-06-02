import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CresetComponent } from './creset.component';

describe('CresetComponent', () => {
  let component: CresetComponent;
  let fixture: ComponentFixture<CresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
