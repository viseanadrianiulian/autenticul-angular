import { ArticleComponent } from "../shared/blog/article/article.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { Trimestru1Component } from "./mama-si-bebe/capitole.component";
import { MamaSiBebeComponent } from "./mama-si-bebe/mama-si-bebe.component";



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
        path: 'mama-si-bebe/trimestrul1',
        component: Trimestru1Component
    },
    {
        path: 'mama-si-bebe/trimestrul1/article/:title',
        component: ArticleComponent
    }
]