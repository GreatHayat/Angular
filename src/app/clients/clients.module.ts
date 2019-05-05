import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './components/clients.component';
import { ClientFormComponent } from './components/client-form.component';
// import { StoreModule } from '@ngrx/store';
// import * as fromClient from './store/clients.reducers';
// import { EffectsModule } from '@ngrx/effects';
// import { ClientEffects } from './store/clients.effects';
@NgModule({
  declarations: [
    ClientsComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // StoreModule.forRoot({ clients: fromClient.ClientReducer }),
    // EffectsModule.forRoot([ClientEffects])
  ]
})
export class ClientsModule { }
