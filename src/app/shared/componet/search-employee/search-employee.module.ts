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
import { EmployeeDetailsModule } from '../../../shared/componet/employee-details/employee-details.module';


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
    ReactiveFormsModule,
    EmployeeDetailsModule
  ]
})
export class SearchEmployeeModule { }
