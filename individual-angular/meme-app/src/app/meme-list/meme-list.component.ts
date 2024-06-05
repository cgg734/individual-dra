import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { SharedMemeService } from '../shared-meme.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meme-list',
  standalone: true,
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.css'],
  imports: [HttpClientModule, CommonModule, NgIf, NgFor, FormsModule]
})
export class MemeListComponent implements OnInit {
  memes: any[] = [];
  searchTerm: string = '';

  constructor(private memeService: MemeService, private sharedMemeService: SharedMemeService, private router: Router) { }

  ngOnInit(): void {
    this.memeService.getMemes().subscribe(response => {
      if (response.success) {
        this.memes = response.data.memes;
      }
    });
  }

  filteredMemes() {
    if (!this.searchTerm) {
      return this.memes;
    }
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    return this.memes.filter(meme => meme.name.toLowerCase().includes(lowerSearchTerm));
  }

  selectMeme(meme: any): void {
    this.sharedMemeService.setMeme(meme);
    this.router.navigate(['/create']);
  }
}
