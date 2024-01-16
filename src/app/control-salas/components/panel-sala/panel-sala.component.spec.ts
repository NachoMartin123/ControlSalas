import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSalaComponent } from './panel-sala.component';

describe('PanelSalaComponent', () => {
  let component: PanelSalaComponent;
  let fixture: ComponentFixture<PanelSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
