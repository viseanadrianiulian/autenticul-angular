import { Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { LiveEventComponent } from "./live-event/live-event.component";
import { AddEventComponent } from "./add-event/add-event.component";
import { RankingsComponent } from "./rankings/rankings.component";
import { PastEventsComponent } from "./past-events/past-events.component";


export const GAMING_ROUTES: Routes = [
  {
      path: 'home',
      component: MainPageComponent
  },
  {
      path: 'live',
      component: LiveEventComponent
  },
  {
      path: 'add',
      component: AddEventComponent
  },
  {
      path: 'rankings',
      component: RankingsComponent
  },
  {
      path: 'past',
      component: PastEventsComponent
  }
  
];