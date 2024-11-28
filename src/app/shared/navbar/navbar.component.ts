import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule, RouterLink, NgbCollapse],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuCollapsed = false;
}
