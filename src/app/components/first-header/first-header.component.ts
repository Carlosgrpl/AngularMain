import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-first-header',
  standalone: true,
  imports: [BodyComponent],
  templateUrl: './first-header.component.html',
  styleUrl: './first-header.component.css'
})
export class FirstHeaderComponent {

userName: string = "Carlos";

/* Esta variable solamente existe dentro del componente header, cada componente es un compartimiento distinto */
}

