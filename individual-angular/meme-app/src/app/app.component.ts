import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HttpClientModule, CommonModule, NgIf, NgFor, FormsModule]
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
