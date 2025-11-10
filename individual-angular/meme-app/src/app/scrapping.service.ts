import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        HttpClientModule, CommonModule, RouterOutlet
    ]
})

@Injectable({
  providedIn: 'root',
})
export class ScrappingService {
  private apiUrl = 'http://localhost:8080/api/scraping/wikipedia';

  constructor(private http: HttpClient, private router : Router) {}

  goToLista() {
    this.router.navigate(['/']);
  }

  goToAlmacen() {
    this.router.navigate(['/almacen']);
  }

  goToInfo() {
    this.router.navigate(['/info']);
  }

  getWikipediaContent(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
