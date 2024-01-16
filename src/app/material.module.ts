import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatOptionModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
//import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObserversModule } from '@angular/cdk/observers';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatMenuModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatAutocompleteModule,
    ObserversModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  exports: [
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatMenuModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatAutocompleteModule,
    ObserversModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [
  
  ]
})
export class MaterialModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.matIconRegistry.setDefaultFontSetClass('fa');
  }
}
