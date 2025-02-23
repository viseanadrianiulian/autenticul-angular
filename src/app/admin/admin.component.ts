import { Component } from '@angular/core';
import { Prize } from './prize';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  newPrize: Prize = new Prize(0,true, 'Dec 2024');

  onSubmitAddPrize(){
    
  }
}
