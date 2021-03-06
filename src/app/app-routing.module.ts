import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent } , 
  {path: 'detail/:id' , component: DetailComponent} , 
  {path : '', pathMatch:'full' , redirectTo: 'home'},
  {path : '**', pathMatch:'full' , redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
