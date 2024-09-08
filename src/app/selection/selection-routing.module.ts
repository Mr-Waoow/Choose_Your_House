import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './selection.component';
import { LocationComponent } from './location/location.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  {
    path: 'Select-House',
    component: SelectionComponent,
    children: [
      { path: '', component: LocationComponent },
      { path: 'Location', component: LocationComponent },
      { path: 'Type', component: TypeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionRoutingModule { }
