import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstHeaderComponent } from './components/first-header/first-header.component';
import Products from './models/Products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

consumerName: string = "Carlitos";
userAge: number = 25;
livesInSpainBoolean: boolean = true;

computer: Products = {
  id: 1,
  name: "Macbook Pro 2018",
  price: 1000,
  isForSale: true,
  img: "../../assets/macbook.png"
};

/* El tipo de dato any representa cualquier tipo de dato, no es tan buena práctica pero se utiliza bastante, es mejor que no, solo para pruebas (si eso fuera necesario) */

constructor(){
  this.consumerName = "Carlos";
  this.userAge = 25;
  this.livesInSpainBoolean = true;
  this.computer = {
    id: 1,
    name: "Macbook Pro 2018",
    price: 1000,
    isForSale: true,
    img: "../../assets/macbook.png"
  }
}

}

/* Esta variable solamente existe dentro del componente header, cada componente es un compartimiento distinto */
