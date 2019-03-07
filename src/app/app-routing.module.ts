import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesMainPageComponent } from './movies-main-page/movies-main-page.component';
import { MoviesDetailsPageComponent } from './movies-details-page/movies-details-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesMainPageComponent
  }
  ,
  {
    path: 'movieDetails/:id',
    component: MoviesDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
