import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { VehicleFormComponent } from './vehicle-form.component';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';
import  {Vehicle} from '@app/_models/vehicle';
import { Store, select, Action } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {VehicleState} from '../store/vehicle.state';
import {CREATE_VEHICLE, GET_VEHICLE, EDIT_VEHICLE, DELETE_VEHICLE} from '../store/vehicle.action';
import ActionWithPayload from '../../ActionWithPayload';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SnackbarService } from '../../_services/index';
@Component({
  selector: 'anms-vehicles',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Vehicle>;
  displayedColumns: string[] = ['select', 'id', 'nachname', 'vorname', 'stadt', 'actions'];
  VehicleState$: Observable<VehicleState>;
  VehicleSubscription: Subscription;
  Title: string;
  Completed = false;
  VehicleList: Vehicle[]; 
  opp: string;
  vehicles: Vehicle[];
  selection = new SelectionModel<Vehicle>(true, []);

  constructor(public dialog: MatDialog, private store: Store<VehicleState>, private SnackbarService: SnackbarService, public router: Router) {
  }

  ngOnInit() {
    this.VehicleState$ = this.store.pipe(select('vehicles'));
    const getVehicleAction: Action = {
      type: GET_VEHICLE
    };

    this.VehicleSubscription = this.VehicleState$.pipe(map(x => {
      if (x && x.VehicleList) {
        if (x.message)
        this.SnackbarService.showMessage(x.message, this.opp);
        this.vehicles = x.VehicleList;
        this.refreshGrid();
      }
    })).subscribe();
    this.store.dispatch(getVehicleAction);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(isAdd: boolean, row?) {
    this.router.navigate(['vehicle-form']);
    let dialogRef: any;

    if (isAdd) {
      this.opp = 'info';
      // dialogRef = this.dialog.open(ClientFormComponent);
    }
    else {
      this.opp = 'info';
      if (row){
        console.log('vehicle to edit for passing:', row);
        console.log(row.id);
        this.router.navigate(["/vehicle-form", row.id]);
          // dialogRef = this.dialog.open(ClientFormComponent, { data: row });
      }
    }

    if (dialogRef) {
      dialogRef.afterClosed().subscribe(vehicle => {
        console.log('Dialog result:', vehicle);
        if (vehicle) {
          this.saveVehicleInfo(vehicle);
        }
      });
    }
  }

  deleteVehicles(row?) {
    this.opp = 'warning';
    let dialogRef: any;
    dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Delete',
          cancel: 'Cancel'
        }
      }
    });
    if (dialogRef) {
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          let selectedRows: Vehicle[]
          if (row){
            selectedRows = [row];
          }else{
            selectedRows = this.getAllSelectedRows();
          }
          if (selectedRows && selectedRows.length > 0) {
            selectedRows.forEach(vehicleInfo => {
              const index = this.vehicles.findIndex(x => x.id === vehicleInfo.id);
              if (index > -1) {
                const vehicleAction: ActionWithPayload<Vehicle> = {
                  type: DELETE_VEHICLE,
                  payload: vehicleInfo
                }
                this.store.dispatch(vehicleAction);
              }
            });
            this.selection.clear();
            this.refreshGrid();
          }
        }
      });
    }

  }

  saveVehicleInfo(vehicle: Vehicle) {
    if (!vehicle.id) {
      // new vehicle
      vehicle.id = this.generateNextId(this.vehicles);
      const vehicleAction: ActionWithPayload<Vehicle> = {
        type: CREATE_VEHICLE,
        payload: vehicle
      }
      this.store.dispatch(vehicleAction);
    }
    else {
      const vehicleAction: ActionWithPayload<Vehicle> = {
        type: EDIT_VEHICLE,
        payload: vehicle
      }
      this.store.dispatch(vehicleAction);
    }

  }

  refreshGrid() {

    this.dataSource = new MatTableDataSource<Vehicle>(this.vehicles);
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    if (this.dataSource) {

      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  }

  masterToggle($event) {
    if ($event.checked){
      this.dataSource.data.forEach(row => this.selection.select(row));
    }else{
      this.selection.clear()
    }
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    else {
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
  }

  onRowClick($event: any, row: any) {
    $event.stopPropagation();
    if (this.selection.isSelected(row)) {
      console.log('row unselected:', row);
    }
    else {
      console.log('row selected:', row);
    }
  }

  getLastSelectedRow(): Vehicle {
    let lastSelectedRow: Vehicle;
    this.dataSource.data.forEach(row => {
      if (this.selection.isSelected(row)) {
        lastSelectedRow = row;
      }
    });
    return lastSelectedRow;
  }

  getAllSelectedRows(): Vehicle[] {
    if (this.isAllSelected()) {
      return this.dataSource.data;
    }
    else {
      const selectedRows: Vehicle[] = [];
      this.dataSource.data.forEach(row => {
        if (this.selection.isSelected(row)) {
          selectedRows.push(row);
        }
      });
      return selectedRows;
    }
  }

  generateNextId(records: any[]) {
    if (records) {
      const ids = records.map(x => x.id);
      if (ids) {
        const maxId = Math.max.apply(Math, ids);
        return maxId + 1;
      }
      else {
        return 1;
      }
    }
    else {
      return 1;
    }
  }

}
