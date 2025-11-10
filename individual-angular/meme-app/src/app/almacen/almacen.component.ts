import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { Meme } from '../meme';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-meme-almacen',
    templateUrl: './almacen.component.html',
    styleUrls: ['./almacen.component.css'],
    imports: [FormsModule, CommonModule]
})
export class AlmacenComponent implements OnInit {
  memes: Meme[] = [];

  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memeService.getAllStoredMemes().subscribe((data: Meme[]) => {
      this.memes = data;
    });
  }
}
