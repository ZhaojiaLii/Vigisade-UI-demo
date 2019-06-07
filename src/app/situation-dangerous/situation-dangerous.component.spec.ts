import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationDangerousComponent } from './situation-dangerous.component';

describe('SituationDangerousComponent', () => {
  let component: SituationDangerousComponent;
  let fixture: ComponentFixture<SituationDangerousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationDangerousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationDangerousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
