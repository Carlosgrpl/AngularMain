import { PersonComponent } from './components/person/person.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstHeaderComponent } from './components/first-header/first-header.component';
import Products from './models/Products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstHeaderComponent, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  consumerName: string;
  userAge: number = 25;
  livesInSpainBoolean: boolean;
  inputPlacerholder: string = "Write down your fav PC";
  computer: Products;
  personName: string;

  constructor() {
    this.consumerName = "Carlos";
    this.userAge = 25;
    this.livesInSpainBoolean = true;
    this.computer = {
      id: 1,
      name: "Macbook Pro 2018",
      price: 1000,
      isForSale: true,
      img: "../../assets/macbook.png"
    };
    this.personName = ""; // Initialize personName
  }

  setConsumerName(): void {
    this.consumerName = "Carlos";
  }


}
