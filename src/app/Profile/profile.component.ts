import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent  {
  name: string = "Jean Del Rio Labrador" 
  age: string = "20 years old"
  address: string = "Pila, Laguna" ;
}