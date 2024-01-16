import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlSalasComponent } from './control-salas.component';
import { SalaComponent } from './components/sala/sala.component';
import { PanelSalaComponent } from './components/panel-sala/panel-sala.component';
import { SelectorPlantaComponent } from './components/selector-planta/selector-planta.component';
import { ControlSalasRoutingModule } from './control-salas-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';


@NgModule({
  declarations: [
    ControlSalasComponent,
    SalaComponent,
    PanelSalaComponent,
    SelectorPlantaComponent
  ],
  imports: [
    CommonModule,
    ControlSalasRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ControlSalasModule { }
