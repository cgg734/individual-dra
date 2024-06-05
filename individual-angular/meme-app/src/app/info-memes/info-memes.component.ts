import { Component } from '@angular/core';
import { ScrappingService } from '../scrapping.service';

@Component({
  selector: 'app-info-memes',
  standalone: true,
  imports: [],
  templateUrl: './info-memes.component.html',
  styleUrl: './info-memes.component.css'
})
export class InfoMemesComponent {
  content: string = '';

  constructor(private scrapingService: ScrappingService) {}

  ngOnInit(): void {
    this.scrapingService.getWikipediaContent().subscribe((data) => {
      this.content = data;
    });
  }

}
