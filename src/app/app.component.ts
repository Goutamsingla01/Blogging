import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FooterComponent } from "./mycomponents/footer/footer.component";
import { Blog1Component } from "./mycomponents/blog1/blog1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, Blog1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogging';
}
