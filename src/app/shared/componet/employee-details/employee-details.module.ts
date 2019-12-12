/**
 * External Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal Imports
 */
import { EmployeeDetailsComponent } from './employee-details.component';

/**
 * Admin Module
 */
@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  exports: [
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeDetailsModule { }
