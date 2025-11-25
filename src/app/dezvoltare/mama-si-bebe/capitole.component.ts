import { Component } from '@angular/core';
import { BlogPageComponent } from "../../shared/blog/blog-page/blog-page.component";

@Component({
  selector: 'app-inainte-de-sarcina',
  template: '<app-blog-page endpoint="inainte-de-sarcina"></app-blog-page>',
  imports: [BlogPageComponent],
  standalone: true
})
export class InainteDeSarcinaComponent {}


@Component({
  selector: 'app-trimestru1',
  template: '<app-blog-page endpoint="trimestrul1"></app-blog-page>',
  imports: [BlogPageComponent],
  standalone: true
})
export class Trimestru1Component {}


@Component({
    selector: 'app-trimestru2',
    template: '<app-blog-page endpoint="trimestrul2"></app-blog-page>',
    imports: [BlogPageComponent],
    standalone: true
  })
  export class Trimestru2Component {}
  

  @Component({
    selector: 'app-trimestru3',
    template: '<app-blog-page endpoint="trimestrul3"></app-blog-page>',
    imports: [BlogPageComponent],
    standalone: true
  })
  export class Trimestru3Component {}

    @Component({
    selector: 'app-nou-nascut',
    template: '<app-blog-page endpoint="nou-nascut"></app-blog-page>',
    imports: [BlogPageComponent],
    standalone: true
  })
  export class NouNascutComponent {}

    @Component({
    selector: 'app-sugarul',
    template: '<app-blog-page endpoint="sugarul"></app-blog-page>',
    imports: [BlogPageComponent],
    standalone: true
  })
  export class SugarulComponent {}

      @Component({
    selector: 'app-toddler',
    template: '<app-blog-page endpoint="toddler"></app-blog-page>',
    imports: [BlogPageComponent],
    standalone: true
  })
  export class ToddlerComponent {}