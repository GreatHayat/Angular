import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsContainerComponent } from './settings';
import { ClientsComponent } from './clients/components/clients.component';
import {ClientFormComponent } from './clients/components/client-form.component';
import { VehicleFormComponent } from "./vehicles/components/vehicle-form.component";
import { VehiclesComponent } from './vehicles/components/vehicle.component';

import { AlertDialogComponent } from './shared/alert-dialog/alert-dialog.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'anms.menu.settings' }
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'client-form',
    component: ClientFormComponent,
  },
  {
    path: 'client-form/:id',
    component: ClientFormComponent
  },
  {
    path: 'alert-dialog',
    component: AlertDialogComponent,
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'vehicle-form',
    component: VehicleFormComponent
  },
  {
    path: 'vehicle-form/:id',
    component: VehicleFormComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
