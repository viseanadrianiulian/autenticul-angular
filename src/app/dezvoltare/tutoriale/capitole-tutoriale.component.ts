import { Component } from "@angular/core";
import { BlogPageComponent } from "../../shared/blog/blog-page/blog-page.component";





@Component({
  selector: 'app-inainte-de-sarcina',
  template: '<app-blog-page endpoint="tehnologie-tutorial"></app-blog-page>',
  imports: [BlogPageComponent],
  standalone: true
})
export class TehnologieTutorialComponent {}