import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  onCardClick() {
    console.log('Card clicked!');
    // Add your navigation or action logic here
  }
}
