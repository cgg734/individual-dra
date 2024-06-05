import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { Meme } from './meme';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule, CommonModule, RouterOutlet, AppComponent]
})

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  private apiUrl = 'https://api.imgflip.com/get_memes';
  private createMemeUrl = 'https://api.imgflip.com/caption_image';
  private api = 'http://localhost:8080/api/memes';


  constructor(private http: HttpClient, private router : Router) { }

  getMemes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  goToLista() {
    this.router.navigate(['/']);
  }

  goToAlmacen() {
    this.router.navigate(['/almacen']);
  }

  goToInfo() {
    this.router.navigate(['/info']);
  }

  createMeme(template_id: string, texts: string[]): Observable<any> {
    let params = new HttpParams()
      .set('template_id', template_id)
      .set('username', 'CRISTIANGIL')
      .set('password', 'n65dtxUi!2iDeF6');

    if (texts.length <= 2) {
      params = params.set('text0', texts[0] || '').set('text1', texts[1] || '');
    } else {
      texts.forEach((text, index) => {
        params = params.set(`boxes[${index}][text]`, text);
      });
    }

    return this.http.post(this.createMemeUrl, null, { params });
  }


  saveMeme(meme: Meme): Observable<Meme> {
    return this.http.post<Meme>(this.api, meme);
  }

  getAllStoredMemes(): Observable<Meme[]> {
    return this.http.get<{ _embedded: { memes: Meme[] } }>(this.api).pipe(
      map(response => response._embedded.memes)
    );
  }
}
