/**
 * External Imports
 */
import { Route } from '@angular/router';

/**
 * Internal Imports
 */
import { AdminComponent } from './admin.component';
import { Role } from '../../models/role';
import { AuthGuard } from '../../services/gurads/auth.guard';

/**
 * Admin module based routing
 */
export const AdminRoutes: Route[] = [
    {
        path: '',
        canActivate: [AuthGuard],
        data: { roles: [Role.admin] },
        component: AdminComponent
    }
];


