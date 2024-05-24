import { Component } from '@angular/core';

@Component({
  selector: 'app-person', // Selector for the person component
  standalone: true, // Indicates that this component does not belong to any NgModule
  imports: [], // No imports needed for this component
  templateUrl: './person.component.html', // Template URL for the component's HTML
  styleUrls: ['./person.component.css'] // Stylesheet URLs for the component's CSS (should be an array)
})
export class PersonComponent {
  personName: string; // Variable to hold the person's name
  personAge: number; // Variable to hold the person's age
  isFromMadrid: boolean; // Variable to indicate if the person is from Madrid
  inputPlaceholder: string; // Placeholder text for an input field

  // Constructor initializes the class properties
  constructor() {
    this.personName = 'Adrian'; // Set default person name to "Adrian"
    this.personAge = 33; // Set default person age to 33
    this.isFromMadrid = false; // Set default boolean indicating the person is not from Madrid
    this.inputPlaceholder = 'Nombre de usuario'; // Set default placeholder text to "Nombre de usuario"
  }

  // Method to clean the person's name, setting it to an empty string
  cleanPersonName(): void {
    this.personName = "";
  }

}
