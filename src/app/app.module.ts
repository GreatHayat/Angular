import { VehicleModule } from './vehicles/vehicle.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { ClientsModule } from './clients/clients.module';
import { SettingsModule } from './settings';
import { StaticModule } from './static';
import { NavService } from './_services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import * as fromClient from '@app/clients/store/clients.reducers';
import * as fromVehicle from '@app/vehicles/store/vehicle.reducers';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from '@app/vehicles/store/vehicle.effects';
import { ClientEffects } from '@app/clients/store/clients.effects';
@NgModule({
  imports: [
    StoreModule.forRoot({ clients: fromClient.ClientReducer, vehicles: fromVehicle.VehicleReducer }),
    EffectsModule.forRoot([ClientEffects, VehicleEffects]),

    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    ClientsModule,
    VehicleModule,
    StaticModule,
    SettingsModule,

    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    // app
    AppRoutingModule,

  ],
  declarations: [AppComponent, MenuListItemComponent],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
