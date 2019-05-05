import { VehicleFormComponent } from './components/vehicle-form.component';
import { VehiclesComponent } from './components/vehicle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { StoreModule } from '@ngrx/store';
// import * as fromVehicle from './store/vehicle.reducers';
// import { EffectsModule } from '@ngrx/effects';
// import { VehicleEffects } from './store/vehicle.effects';


@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // StoreModule.forRoot({ vehicles: fromVehicle.VehicleReducer }),
    // EffectsModule.forRoot([VehicleEffects])
  ]
})
export class VehicleModule { }
