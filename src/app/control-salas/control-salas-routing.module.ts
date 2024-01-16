import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlSalasComponent } from './control-salas.component'

const controlSalasRoutes: Routes = [
  //todas precedidas por /control-salas/
  //{ path: '/', component: ControlSalasComponent },
  { path: '**', component: ControlSalasComponent }
];


@NgModule({
  imports: [RouterModule.forChild(controlSalasRoutes)],
  exports: [RouterModule]
})
export class ControlSalasRoutingModule { }
