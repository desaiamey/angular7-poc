/**
 * External Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Internal Imports
 */
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routes';
import { HeaderModule } from '../../shared/componet/header/header.module';
import { SearchEmployeeModule } from '../../shared/componet/search-employee/search-employee.module';

/**
 * Admin Module
 */
@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(AdminRoutes),
    CommonModule,
    HeaderModule,
    SearchEmployeeModule,
  ]
})
export class AdminModule { }
