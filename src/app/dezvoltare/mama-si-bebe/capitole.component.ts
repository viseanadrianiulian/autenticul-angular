import { Component } from '@angular/core';
import { BlogPageComponent } from "../../shared/blog/blog-page/blog-page.component";

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
  