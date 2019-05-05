import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ClientFormComponent } from './client-form.component';
import { AlertDialogComponent } from '../../shared/alert-dialog/alert-dialog.component';
import { Client } from '@app/_models';
import { Store, select, Action } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ClientState } from '../store/clients.state';
import { CREATE_CLIENT, GET_CLIENT, EDIT_CLIENT, DELETE_CLIENT } from '../store/clients.action';
import ActionWithPayload from '../../ActionWithPayload';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SnackbarService } from '../../_services/index';
@Component({
  selector: 'anms-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Client>;
  displayedColumns: string[] = ['select', 'id', 'nachname', 'vorname', 'stadt', 'actions'];
  ClientState$: Observable<ClientState>;
  ClientSubscription: Subscription;
  Title: string;
  Completed = false;
  ClientList: Client;
  opp: string;
  clients: Client[];
  selection = new SelectionModel<Client>(true, []);

  constructor(public dialog: MatDialog, private store: Store<ClientState>, private SnackbarService: SnackbarService, public router: Router) {
  }

  ngOnInit() {
    this.ClientState$ = this.store.pipe(select('clients'));
    const getClientAction: Action = {
      type: GET_CLIENT
    };

    this.ClientSubscription = this.ClientState$.pipe(map(x => {
      console.log('ClientList Subscribe', x);
      if (x && x.ClientList) {
        if (x.message)
        this.SnackbarService.showMessage(x.message, this.opp);
        this.clients = x.ClientList;
        this.refreshGrid();
      }
    })).subscribe();
    this.store.dispatch(getClientAction);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(isAdd: boolean, row?) {
    this.router.navigate(['client-form']);
    let dialogRef: any;

    if (isAdd) {
      this.opp = 'info';
      // dialogRef = this.dialog.open(ClientFormComponent);
    }
    else {
      this.opp = 'info';
      if (row){
        console.log('client to edit for passing:', row);
        
       this.router.navigate(["/client-form", row.id]);
        // dialogRef = this.dialog.open(ClientFormComponent, { data: row });
      }
    }

    if (dialogRef) {
      dialogRef.afterClosed().subscribe(client => {
        console.log('Dialog result:', client);
        if (client) {
          this.saveClientInfo(client);
        }
      });
    }
  }

  updateClient
  deleteClients(row?) {
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
          let selectedRows: Client[]
          if (row){
            selectedRows = [row];
          }else{
            selectedRows = this.getAllSelectedRows();
          }
          if (selectedRows && selectedRows.length > 0) {
            selectedRows.forEach(clientInfo => {
              const index = this.clients.findIndex(x => x.id === clientInfo.id);
              if (index > -1) {
                const clientAction: ActionWithPayload<Client> = {
                  type: DELETE_CLIENT,
                  payload: clientInfo
                }
                this.store.dispatch(clientAction);
              }
            });
            this.selection.clear();
            this.refreshGrid();
          }
        }
      });
    }

  }

  saveClientInfo(client: Client) {
    if (!client.id) {
      // new client
      client.id = this.generateNextId(this.clients);
      const clientAction: ActionWithPayload<Client> = {
        type: CREATE_CLIENT,
        payload: client
      }
      this.store.dispatch(clientAction);
    }
    else {
      const clientAction: ActionWithPayload<Client> = {
        type: EDIT_CLIENT,
        payload: client
      }
      this.store.dispatch(clientAction);
    }

  }

  refreshGrid() {

    this.dataSource = new MatTableDataSource<Client>(this.clients);
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    if(this.dataSource) {

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

  getLastSelectedRow(): Client {
    let lastSelectedRow: Client;
    this.dataSource.data.forEach(row => {
      if (this.selection.isSelected(row)) {
        lastSelectedRow = row;
      }
    });
    return lastSelectedRow;
  }

  getAllSelectedRows(): Client[] {
    if (this.isAllSelected()) {
      return this.dataSource.data;
    }
    else {
      const selectedRows: Client[] = [];
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
