import { Routes } from '@angular/router';

export const routes: Routes = [
    {   path: '', 
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
    },
    { 
        path: 'users',
        loadChildren: () => import ('./users/users.routes').then(r => r.USER_ROUTES)
    },
    {
        path: 'gaming',
        loadChildren: () => import ('./gaming/gaming.routes').then(r => r.GAMING_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(a => a.ADMIN_ROUTES)
    },
    {
        path: 'dezvoltare',
        loadChildren: () => import('./dezvoltare/dezvoltare.routes').then(d => d.DEZVOLTARE_ROUTES)
    },
    {
        path: 'blog',
        loadChildren: () => import('./shared/blog/blog.routes').then(b => b.BLOG_ROUTES)
    }
];
