import { Component, OnInit } from '@angular/core';
import { DataService } from '../../http-services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public cols: any;
  public rowData: any;
  constructor(private __dataService: DataService) { 
    __dataService.getAll().then(res => {
      this.rowData = res.data;
    });
  }

  ngOnInit() {
    this.cols = [
      { title: 'NAME',  path: 'view-data'},
      { title: 'DOB'  },
      { title: 'EMAIL'  },
      { title: 'BUDGET'  },
      { title: 'GENDER'  }
    ]
  }

}
