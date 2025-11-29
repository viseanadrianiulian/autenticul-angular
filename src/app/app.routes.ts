import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: {
      seo: {
        title: 'Autenticul.ro — Informații verificate, simple și utile',
        description: 'Portal cu dezvoltare personală și financiară, gaming, recomandări și ghiduri practice. Doar informații verificate.',
        keywords: ['autenticul', 'dezvoltare', 'gaming', 'recomandări', 'ghiduri'],
        canonical: 'https://autenticul.ro/'
      }
    }
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes').then(r => r.USER_ROUTES)
  },
  {
    path: 'gaming',
    loadChildren: () => import('./gaming/gaming.routes').then(r => r.GAMING_ROUTES)
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
