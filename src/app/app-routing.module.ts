import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './core/error/error.component';


const routes: Routes = [
  { path: 'control-salas', loadChildren: () => import('./control-salas/control-salas.module').then(m => m.ControlSalasModule) },
  { path: '', component: ErrorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
