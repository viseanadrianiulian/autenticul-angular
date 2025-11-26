import { ArticleComponent } from "../shared/blog/article/article.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { InainteDeSarcinaComponent, NouNascutComponent, SugarulComponent, Trimestru1Component, Trimestru2Component, Trimestru3Component } from "./mama-si-bebe/capitole.component";
import { MamaSiBebeComponent } from "./mama-si-bebe/mama-si-bebe.component";
import { TutorialeComponent } from "./tutoriale/tutoriale.component";



export const DEZVOLTARE_ROUTES = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'home',
        component: MainPageComponent
    },
    {
        path: 'mama-si-bebe',
        component: MamaSiBebeComponent
    },
    {
        path: 'mama-si-bebe/inainte-de-sarcina',
        component: InainteDeSarcinaComponent
    },
    {
        path: 'mama-si-bebe/inainte-de-sarcina/article/:title',
        component: ArticleComponent
    },
    {
        path: 'mama-si-bebe/trimestrul1',
        component: Trimestru1Component
    },
    {
        path: 'mama-si-bebe/trimestrul1/article/:title',
        component: ArticleComponent
    },
    {
        path: 'mama-si-bebe/trimestrul2',
        component: Trimestru2Component
    },
    {
        path: 'mama-si-bebe/trimestrul2/article/:title',
        component: ArticleComponent
    },
    {
        path: 'mama-si-bebe/trimestrul3',
        component: Trimestru3Component
    },
    {
        path: 'mama-si-bebe/trimestrul3/article/:title',
        component: ArticleComponent
    },
    {
        path: 'mama-si-bebe/nou-nascut',
        component: NouNascutComponent
    },
    {
        path: 'mama-si-bebe/nou-nascut/article/:title',
        component: ArticleComponent
    },
    {
        path: 'mama-si-bebe/sugarul',
        component: SugarulComponent
    },
    {
        path: 'mama-si-bebe/sugarul/article/:title',
        component: ArticleComponent
    },
    {
        path: 'tutoriale',
        component: TutorialeComponent
    }

]