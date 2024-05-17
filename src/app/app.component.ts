import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstHeaderComponent } from './components/first-header/first-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = "Carlos";
}
