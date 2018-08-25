import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
