import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedMemeService } from '../shared-meme.service';
import { Router } from '@angular/router'; 
import { Meme } from '../meme';

@Component({
    selector: 'app-meme-create',
    templateUrl: './meme-create.component.html',
    styleUrls: ['./meme-create.component.css'],
    imports: [FormsModule, CommonModule, NgIf,
        // TODO: `HttpClientModule` should not be imported into a component directly.
        // Please refactor the code to add `provideHttpClient()` call to the provider list in the
        // application bootstrap logic and remove the `HttpClientModule` import from this component.
        HttpClientModule]
})
export class MemeCreateComponent implements OnInit {

  templateId: string = '';
  texts: string[] = [];
  memeUrl: string = '';

  constructor(private memeService: MemeService, public sharedMemeService: SharedMemeService, private router: Router) { }

  ngOnInit(): void {
    const selectedMeme = this.sharedMemeService.getMeme();
    if (selectedMeme) {
      this.templateId = selectedMeme.id;
      this.texts = Array(selectedMeme.box_count).fill('');
    }
  }

  createMeme(): void {
    this.memeService.createMeme(this.templateId, this.texts).subscribe(response => {
      if (response.success) {
        this.memeUrl = response.data.url;
        const meme = new Meme();
        meme.url = this.memeUrl;
        this.saveMeme(meme);
      }
    });
  }

  saveMeme(meme: Meme): void {
    this.memeService.saveMeme(meme).subscribe(savedMeme => {
      console.log('Meme guardado:', savedMeme);
    });
  }
  
  addTextField(): void {
    this.texts.push('');
  }

  removeTextField(index: number): void {
    if (this.texts.length > 1) {
      this.texts.splice(index, 1);
    }
  }

  resetMeme(): void {
    this.texts = Array(this.sharedMemeService.getMeme().box_count).fill('');
    this.memeUrl = '';
  }

  goBack(): void {
    this.sharedMemeService.setMeme(null);
    this.router.navigate(['/']);
  }

  downloadMeme(): void {
    const link = document.createElement('a');
    link.href = this.memeUrl;
    link.download = 'meme.jpg';
    link.click();
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
