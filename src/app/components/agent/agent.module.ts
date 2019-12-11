/**
 * External Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Internal Imports
 */
import { AgentComponent } from './agent.component';
import { AgentRoutes } from './agent.routes';
import { HeaderModule } from '../../shared/componet/header/header.module';

/**
 * Agent Module
 */
@NgModule({
  declarations: [
    AgentComponent
  ],
  exports: [
    AgentComponent
  ],
  imports: [
    RouterModule.forChild(AgentRoutes),
    CommonModule,
    HeaderModule
  ]
})
export class AgentModule { }
