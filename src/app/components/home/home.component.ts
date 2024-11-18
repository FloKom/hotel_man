import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { FormControl, FormGroup } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  dialog:Dialog = inject(Dialog);
  private animal:string = "chat";
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  onCardClick() {
    console.log('Card clicked!');
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  openDialog(): void {
    let animal:string = this.animal
    this.dialog.open(DialogConfirmComponent, {
      minWidth: '300px',
      data: {
        animal
      },
    });



    
    // this.dialog.open<string>(DialogConfirmComponent);
  }
}

