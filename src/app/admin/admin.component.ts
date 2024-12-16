import { Component } from '@angular/core';
import { Prize } from './prize';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  newPrize: Prize = new Prize(0,true, 'Dec 2024');

  onSubmitAddPrize(){
    
  }
}
