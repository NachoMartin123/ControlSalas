import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPlantaComponent } from './selector-planta.component';

describe('SelectorPlantaComponent', () => {
  let component: SelectorPlantaComponent;
  let fixture: ComponentFixture<SelectorPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorPlantaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
