import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

const routes : Routes= [
  { 
    path: '', 
    loadComponent: () => import('./app/components/product-list/product-list.component')
      .then(m => m.ProductListComponent), 
    pathMatch: 'full'  
  },
  { 
    path: 'product/:id', 
    loadComponent: () => import('./app/components/product-detail/product-detail.component')
      .then(m => m.ProductDetailComponent), 
    pathMatch: 'full'  
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error('Error bootstrapping app:', err));
