import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'users',
        loadChildren: () => import ('./users/users.routes').then(r => r.USER_ROUTES)
    },
    {
        path: 'gaming',
        loadChildren: () => import ('./gaming/gaming.routes').then(r => r.GAMING_ROUTES)
    }
];
