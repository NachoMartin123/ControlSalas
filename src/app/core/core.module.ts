import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    FooterComponent, 
    HeaderComponent, 
    ErrorComponent,
    FormsModule
  ],
  entryComponents: [
  ]
})
export class CoreModule { }
