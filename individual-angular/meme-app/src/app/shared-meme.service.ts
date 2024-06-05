import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMemeService {
  private selectedMeme: any;

  setMeme(meme: any): void {
    this.selectedMeme = meme;
  }

  getMeme(): any {
    return this.selectedMeme;
  }
}
