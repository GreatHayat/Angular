import { Contact, Address, Communications } from './../../_models/client';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'anms-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientFormComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  model: Contact;
  render = {}
  tabs = [
    {
      tabName: 'EVENTS/NOTES',
      id: 1
    },
    {
      tabName: 'JOBS',
      id: 2
    },
    {
      tabName: 'VEHICLES',
      id: 3
    },
    {
      tabName: 'INVOICES',
      id: 4
    },
    {
      tabName: 'PURCHASES',
      id: 5
    },
    {
      tabName: 'SALES',
      id: 6
    }
  ]
  currentTabIndex = 0;
  currentTab = { tabName: 'EVENTS/NOTES' };
  displayedColumns: string[] = ['registration', 'from', 'to', 'make', 'model', 'fuel', 'odometer'];
  dataSource = [
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' },
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' },
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' },
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' },
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' },
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' },
    { registration: 1, from: 'Hydrogen', to: 1.0079, make: 'H', model: 'H', fuel: '2', odometer: 'dd' }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {

    this.model = new Contact();
    this.model.address = new Address();
    this.model.billingAddress = new Address();
    
    // if (clienToEdit) {
    //   this.model = clienToEdit;
    // }

    // console.log('client to edit on form:', clienToEdit);
  }

  selectionChange(event) {
    console.log(event.index);
    this.currentTabIndex = event.index;
    this.currentTab = this.tabs[event.index];
    console.log('Current tab set', this.currentTab)
  }
 
  setCurrentTab(tab) {
    console.log('Set current tab to', tab, this.currentTab)
    this.currentTab = tab;
  }

  trackByFunction(index, item) {
    return item ? item.id : undefined;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMeterMap =>{
      const id = paramMeterMap.get('id');

    })
  }
  saveClient() {
    // this.dialogRef.close(this.model);
  }



}
