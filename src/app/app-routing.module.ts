import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductViewDetailComponent } from './pages/product-view-detail/product-view-detail.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  {
    path: 'products',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {path: 'products/:id', component: ProductViewDetailComponent},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
 }
