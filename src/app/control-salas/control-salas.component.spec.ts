import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSalasComponent } from './control-salas.component';

describe('ControlSalasComponent', () => {
  let component: ControlSalasComponent;
  let fixture: ComponentFixture<ControlSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
