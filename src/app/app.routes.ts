import { Routes } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { WeddingComponent } from './wedding/wedding.component';

export const routes: Routes = [
    { path: '', component: ComingSoonComponent },
    { path: 'wedding', component: WeddingComponent }
];
