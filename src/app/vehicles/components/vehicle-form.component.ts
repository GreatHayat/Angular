import {IVehicle} from '@app/_models';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anms-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleFormComponent implements OnInit {
  searchModel: FormControl = new FormControl();
  fakeData : string[] = [
    'Toyota', 'Honda', 'Suzuki', 'Alto'
  ];
  filterOptions : Observable<string[]>;
  options = [];
  fuelOptions = [
    {value: 'PETROL', text: 'Petrol'},
    {value: 'DIESEL', text: 'Diesel'},
    {value: 'ELECTRIC', text: 'Electric'},
    {value: 'HYBRID', text: 'Hybrid'},
    {value: 'LPG', text: 'LPG'},
    {value: 'CNG', text: 'CNG'},
    {value: 'OTHER', text: 'Other'},
  ];
  modelYearOptions = [
    {value: '2019', text: '2019'},
    {value: '2018', text: '2018'},
    {value: '2017', text: '2017'},
    {value: '2016', text: '2016'},
    {value: '2015', text: '2015'},
    {value: '2014', text: '2014'},
    {value: '2014', text: '2014'},
  ];
  makeOptions = [
    {value: 'HONDA', text: 'Honda'},
    {value: 'TOYOTA', text: 'Toyota'},
    {value: 'ELECTRIC', text: 'Electric'},
    {value: 'HYBRID', text: 'Hybrid'},
    {value: 'LPG', text: 'LPG'},
    {value: 'CNG', text: 'CNG'},
  ];
  modelOptions = [
    {value: 'HONDA', text: 'Honda'},
    {value: 'TOYOTA', text: 'Toyota'},
    {value: 'ELECTRIC', text: 'Electric'},
    {value: 'HYBRID', text: 'Hybrid'},
    {value: 'LPG', text: 'LPG'},
    {value: 'CNG', text: 'CNG'},
  ];
 
  modelVehicle: IVehicle;
  searchModelInput =  '';
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

  constructor() {
  }

  ngOnInit() {
    this.options = [
      {
        Derivative: null,
        Description: 'Ashok Leyland  ',
        Make: {
          Active: true,
          MakeID: 'EE7824B7-5444-4F6D-AAC0-6E938EE3B7F0',
          Name: 'Ashok Leyland'
        },
        Model: null
      },
      {
        Derivative: null,
        Description: 'Ashok Leyland STiLE MPV ',
        Make: {
          Active: true,
          MakeID: 'EE7824B7-5444-4F6D-AAC0-6E938EE3B7F0',
          Name: 'Ashok Leyland'
        },
        Model: {
          Active: true,
          MakeID: 'EE7824B7-5444-4F6D-AAC0-6E938EE3B7F0',
          ModelID: '0F584274-7E6A-4F8F-A696-4278CE050E53',
          Name: 'STiLE MPV'
        }
      },
      {
        Derivative: null,
        Description: 'Honda  ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: null
      },
      {
        Derivative: null,
        Description: 'Honda 125cc ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'd2d89e68-02f1-44ee-b723-0ffbfe339bda',
          Name: '125cc'
        }
      },
      {
        Derivative: null,
        Description: 'Honda Accord ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'D73692AE-C4C3-41DE-B225-1596C71EB6B7',
          Name: 'Accord'
        }
      },
      {
        Derivative: null,
        Description: 'Honda Accord Tourer ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'D6DA95D2-8BF9-48E6-B681-9BADF181A6A5',
          Name: 'Accord Tourer'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Amaze ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'AE34CBB0-2225-4A5C-85AD-4E6065E20CB6',
          Name: 'Amaze'
        }
      },
      {
        Derivative: null,
        Description: 'Honda Ballade ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'AD850F3D-DADF-459B-86DD-C4CB9608E80A',
          Name: 'Ballade'
        }
      },
      {
        Derivative: null,
        Description: 'Honda Brio ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'EA9DD22F-E64D-4F24-A356-E023E40AA1DF',
          Name: 'Brio'
        }
      },
      {
        Derivative: null,
        Description: 'Honda City ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FFA0E319-8E23-4AAA-A39F-BD048062071E',
          Name: 'City'
        }
      },
      {
        Derivative: null,
        Description: 'Honda Civic ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '05fc97c8-245c-4143-9304-2613b3c869d3',
          Name: 'Civic'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Civic Hybrid ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FED491FE-2E97-44EF-92ED-4484907E62DF',
          Name: 'Civic Hybrid'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Civic Tourer ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'A8353540-D9F3-4E6E-AC9E-DF322D7FAC21',
          Name: 'Civic Tourer'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Cross Road ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FFA0E319-8E23-4AAA-A39F-BD048062071F',
          Name: 'Cross Road'
        }

      },
      {
        Derivative: null,
        Description: 'Honda CR-V ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '62349B80-004E-4294-83F6-1356E52C19B6',
          Name: 'CR-V'
        }

      },
      {
        Derivative: null,
        Description: 'Honda CR-Z ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '5193DD84-BCDC-4C3C-9251-96D01CBD5DD0',
          Name: 'CR-Z'
        }

      },
      {
        Derivative: null,
        Description: 'Honda D Max ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '8E7D1A45-E56B-45D4-93A6-D3FD2E3B0CA4',
          Name: 'D Max'
        }

      },
      {
        Derivative: null,
        Description: 'Honda HR-V ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'D999A279-1BF8-439A-87DD-7A54B5FB0B40',
          Name: 'HR-V'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Insight ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '3E5EFE21-23A9-4E2D-9C7D-C2EB777593ED',
          Name: 'Insight'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Jazz ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '08050965-65ba-4e8c-94cb-9e22c227629e',
          Name: 'Jazz'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Jazz Hybrid ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '5B481559-2021-4EB1-91BC-4437B2717F8E',
          Name: 'Jazz Hybrid'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Mobilio ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: '5BA3F535-2E0B-4E60-8D50-07CD80A3D8F0',
          Name: 'Mobilio'
        }

      },
      {
        Derivative: null,
        Description: 'Honda MugenRR ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'CF2CAAB4-175D-43C1-9814-7256106D914A',
          Name: 'MugenRR'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Odyssey ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FFA0E319-8E23-4AAA-A39F-BD048062071D',
          Name: 'Odyssey'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Stream ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FFA0E319-8E23-4AAA-A39F-BD048062071C',
          Name: 'Stream'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Wald ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FFA0E319-8E23-4AAA-A39F-BD0480620721',
          Name: 'Wald'
        }

      },
      {
        Derivative: null,
        Description: 'Honda Wish ',
        Make: {
          Active: false,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          Name: 'Honda'
        },
        Model: {
          Active: true,
          MakeID: '88ab0495-7fc0-488a-81f6-bbc56e3e6ef6',
          ModelID: 'FFA0E319-8E23-4AAA-A39F-BD0480620720',
          Name: 'Wish'
        }

      },
      {
        Derivative: null,
        Description: 'Mercedes-Benz CLS Shooting Brake ',
        Make: {
          Active: true,
          MakeID: 'E0565EF9-2B43-47F6-BF80-B2B611071E7E',
          Name: 'Mercedes-Benz'
        },
        Model: {
          Active: true,
          MakeID: 'E0565EF9-2B43-47F6-BF80-B2B611071E7E',
          ModelID: '71928079-92C5-48F3-952B-4365243D8AC5',
          Name: 'CLS Shooting Brake'
        }

      },
      {
        Derivative: null,
        Description: 'Mercedes-Benz CLS Shotting Brake ',
        Make: {
          Active: true,
          MakeID: 'E0565EF9-2B43-47F6-BF80-B2B611071E7E',
          Name: 'Mercedes-Benz'
        },
        Model: {
          Active: true,
          MakeID: 'E0565EF9-2B43-47F6-BF80-B2B611071E7E',
          ModelID: '033C35DC-BAC8-4666-8BFF-1EDB0366B9C1',
          Name: 'CLS Shotting Brake'
        }

      },
      {
        Derivative: null,
        Description: 'Mitsubishi Shogun ',
        Make: {
          Active: true,
          MakeID: '35B308E3-C103-4542-B4B9-BB6E2B2153E1',
          Name: 'Mitsubishi'
        },
        Model: {
          Active: true,
          MakeID: '35B308E3-C103-4542-B4B9-BB6E2B2153E1',
          ModelID: 'E1A38775-BE89-4380-BE4B-88FD3F18A413',
          Name: 'Shogun'
        }

      },
      {
        Derivative: null,
        Description: 'Premier Sigma School Van ',
        Make: {
          Active: true,
          MakeID: 'A7771DC8-ACD8-40E0-ACAC-040F154DBC80',
          Name: 'Premier'
        },
        Model: {
          Active: true,
          MakeID: 'A7771DC8-ACD8-40E0-ACAC-040F154DBC80',
          ModelID: '26206FC7-4074-4E10-BEA4-7390F596BAB5',
          Name: 'Sigma School Van'
        }

      },
      {
        Derivative: null,
        Description: 'Rolls-Royce Ghost ',
        Make: {
          Active: true,
          MakeID: '9C58C91F-EC6B-4642-8950-7035AD1485B9',
          Name: 'Rolls-Royce'
        },
        Model: {
          Active: true,
          MakeID: '9C58C91F-EC6B-4642-8950-7035AD1485B9',
          ModelID: '4E6D2D34-1AA5-4734-913B-58E0D6B0BDBF',
          Name: 'Ghost'
        }

      },
      {
        Derivative: null,
        Description: 'TVR Typhon ',
        Make: {
          Active: true,
          MakeID: 'C32BB559-870A-41CA-BA0B-A21BB9B31A90',
          Name: 'TVR'
        },
        Model: {
          Active: true,
          MakeID: 'C32BB559-870A-41CA-BA0B-A21BB9B31A90',
          ModelID: '5A5FE1F5-0B77-4ADB-99DB-5CEDD070BF37',
          Name: 'Typhon'
        }

      }

    ];
    this.modelVehicle = new IVehicle();
    

    this.filterOptions = this.searchModel.valueChanges
        .pipe(
            startWith(''),
            map(value => this._filter(value))
        );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.fakeData.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchModelInputChange(): void{

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

  saveVehicle() {
    console.log(this.modelVehicle);
  }
}
