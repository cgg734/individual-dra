import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {} from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule, CommonModule, NgIf, NgFor, FormsModule]
})
export class AppComponent {


  constructor(private router: Router) {}

  goToAlmacen() {
    this.router.navigate(['/almacen']);
  }
   
  goToLista() {
    this.router.navigate(['/']);
  }

  goToInfo() {
    this.router.navigate(['/info']);
  }

  title = 'meme-app';
}
