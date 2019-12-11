/**
 * External Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Internal Imports
 */
import { SearchEmployeeComponent } from './search-employee.component';

/**
 * Admin Module
 */
@NgModule({
  declarations: [
    SearchEmployeeComponent
  ],
  exports: [
    SearchEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchEmployeeModule { }
