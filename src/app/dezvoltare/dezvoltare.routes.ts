import { Routes } from '@angular/router';
import { ArticleComponent } from '../shared/blog/article/article.component';
import { MainPageComponent } from './main-page/main-page.component';
import {
  InainteDeSarcinaComponent,
  NouNascutComponent,
  SugarulComponent,
  Trimestru1Component,
  Trimestru2Component,
  Trimestru3Component
} from './mama-si-bebe/capitole.component';
import { MamaSiBebeComponent } from './mama-si-bebe/mama-si-bebe.component';
import { TutorialeComponent } from './tutoriale/tutoriale.component';

export const DEZVOLTARE_ROUTES: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      seo: {
        title: 'Dezvoltare — Ghiduri și resurse verificate',
        description: 'Dezvoltare personală și pentru familie. Ghiduri practice, resurse verificate și informații structurate pe etape.',
        keywords: ['dezvoltare', 'ghiduri', 'familie', 'resurse verificate'],
        canonical: 'https://autenticul.ro/dezvoltare'
      }
    }
  },
  {
    path: 'home',
    component: MainPageComponent,
    data: {
      seo: {
        title: 'Dezvoltare — Ghiduri și resurse verificate',
        description: 'Dezvoltare personală și pentru familie. Ghiduri practice, resurse verificate și informații structurate pe etape.',
        keywords: ['dezvoltare', 'ghiduri', 'familie', 'resurse verificate'],
        canonical: 'https://autenticul.ro/dezvoltare/home'
      }
    }
  },
  {
    path: 'mama-si-bebe',
    component: MamaSiBebeComponent,
    data: {
      seo: {
        title: 'Mama și bebe — informații verificate pe etape',
        description: 'Ghid structurat: înainte de sarcină, trimestrul 1-3, nou-născut, sugar. Informații verificate, clare și utile.',
        keywords: ['mama', 'bebe', 'sarcină', 'nou-născut', 'sugar'],
        canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe'
      }
    }
  },
  {
    path: 'mama-si-bebe/inainte-de-sarcina',
    component: InainteDeSarcinaComponent,
    data: {
      seo: {
        title: 'Înainte de sarcină — checklist și resurse',
        description: 'Analize, stil de viață, suplimente și planificare pentru concepție. Checklist practic și resurse validate.',
        keywords: ['înainte de sarcină', 'analize', 'planificare', 'checklist'],
        canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe/inainte-de-sarcina'
      }
    }
  },
  {
    path: 'mama-si-bebe/inainte-de-sarcina/article/:slug',
    component: ArticleComponent,
    data: {
      seo: {
        title: 'Articol — Înainte de sarcină',
        description: 'Articol tematic din categoria „Înainte de sarcină”.',
        keywords: ['articol', 'înainte de sarcină'],
        // canonical dinamic recomandat în componentă pe baza slug-ului
      }
    }
  },
  {
    path: 'mama-si-bebe/trimestrul1',
    component: Trimestru1Component,
    data: {
      seo: {
        title: 'Trimestrul 1 — ghid complet',
        description: 'Sfaturi și repere medicale pentru trimestrul 1. Ce să urmărești și cum să te pregătești.',
        keywords: ['trimestrul 1', 'sarcină', 'ghid'],
        canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe/trimestrul1'
      }
    }
  },
  {
    path: 'mama-si-bebe/trimestrul1/article/:slug',
    component: ArticleComponent,
    data: {
      seo: {
        title: 'Articol — Trimestrul 1',
        description: 'Articol tematic din categoria „Trimestrul 1”.',
        keywords: ['articol', 'trimestrul 1']
      }
    }
  },
  {
    path: 'mama-si-bebe/trimestrul2',
    component: Trimestru2Component,
    data: {
      seo: {
        title: 'Trimestrul 2 — ghid complet',
        description: 'Repere pentru trimestrul 2: dezvoltarea fătului, controale, stil de viață.',
        keywords: ['trimestrul 2', 'sarcină', 'ghid'],
        canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe/trimestrul2'
      }
    }
  },
  {
    path: 'mama-si-bebe/trimestrul2/article/:slug',
    component: ArticleComponent,
    data: {
      seo: {
        title: 'Articol — Trimestrul 2',
        description: 'Articol tematic din categoria „Trimestrul 2”.',
        keywords: ['articol', 'trimestrul 2']
      }
    }
  },
  {
    path: 'mama-si-bebe/trimestrul3',
    component: Trimestru3Component,
    data: {
        seo: {
          title: 'Trimestrul 3 — ghid complet',
          description: 'Pregătirea pentru naștere, repere medicale și sfaturi pentru trimestrul 3.',
          keywords: ['trimestrul 3', 'sarcină', 'ghid'],
          canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe/trimestrul3'
        }
    }
  },
  {
    path: 'mama-si-bebe/trimestrul3/article/:slug',
    component: ArticleComponent,
    data: {
      seo: {
        title: 'Articol — Trimestrul 3',
        description: 'Articol tematic din categoria „Trimestrul 3”.',
        keywords: ['articol', 'trimestrul 3']
      }
    }
  },
  {
    path: 'mama-si-bebe/nou-nascut',
    component: NouNascutComponent,
    data: {
      seo: {
        title: 'Nou-născut — primele săptămâni',
        description: 'Îngrijirea nou-născutului: somn, alimentație, igienă, semne de urmărit.',
        keywords: ['nou-născut', 'îngrijire', 'somn', 'alimentație'],
        canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe/nou-nascut'
      }
    }
  },
  {
    path: 'mama-si-bebe/sugarul',
    component: SugarulComponent,
    data: {
      seo: {
        title: 'Sugarul — alimentație și dezvoltare',
        description: 'Repere pentru sugar: diversificare, somn, siguranță, dezvoltare.',
        keywords: ['sugar', 'diversificare', 'dezvoltare'],
        canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe/sugarul'
      }
    }
  },
  {
    path: 'tutoriale',
    component: TutorialeComponent,
    data: {
      seo: {
        title: 'Tutoriale — scurte, precise, pe înțelesul tuturor',
        description: 'Tutoriale practice — de la scurt și precis la detaliat, dar mereu clare.',
        keywords: ['tutoriale', 'ghid practic', 'învățare'],
        canonical: 'https://autenticul.ro/dezvoltare/tutoriale'
      }
    }
  }
];
