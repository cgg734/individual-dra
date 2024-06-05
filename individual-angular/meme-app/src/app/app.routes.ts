import { Routes } from '@angular/router';
import { MemeListComponent } from './meme-list/meme-list.component';
import { MemeCreateComponent } from './meme-create/meme-create.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { InfoMemesComponent } from './info-memes/info-memes.component';

export const routes: Routes = [
  { path: '', component: MemeListComponent },
  { path: 'create', component: MemeCreateComponent },
  { path: 'almacen', component: AlmacenComponent },
  { path: 'info', component: InfoMemesComponent },
];
