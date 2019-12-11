/**
 * External Imports
 */
import { Route } from '@angular/router';

/**
 * Internal Imports
 */
import { AgentComponent } from './agent.component';
import { Role } from '../../models/role';
import { AuthGuard } from '../../services/gurads/auth.guard';

/**
 * Agent Module Based Routing
 */
export const AgentRoutes: Route[] = [
    {
        path: '',
        component: AgentComponent,
        canActivate: [AuthGuard],
        data: {
            roles: [Role.agent]
        }
    }
];
