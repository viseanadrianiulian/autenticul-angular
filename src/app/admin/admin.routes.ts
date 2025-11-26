import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { PageInProgressComponent } from "./page-in-progress/page-in-progress.component";


export const ADMIN_ROUTES: Routes = [
  {
      path: 'home',
      component: AdminComponent
  },
  {
      path: 'page-in-progress',
      component: PageInProgressComponent
  }
  
];