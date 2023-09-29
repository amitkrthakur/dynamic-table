import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { ColDef } from 'ag-grid-community';
import { TableData } from './model';
import { data } from './data'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly tabs = data.map(x => { return { title: x.title, active: false } });
  public tableData: Array<TableData> = [];
  public columnDefs: ColDef[] = [];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    editable: false,
    flex: 1,
    minWidth: 200,
  };

  ngOnInit(): void {
    this.activateTab(0);
  }

  activateTab(index: number) {
    this.tabs.forEach(x => x.active = false)
    this.tabs[index].active = true;
    this.renderTable(index)
  }

  renderTable(index: number) {
    this.tableData = data[index].tabData;
    const groupBy = data[index].groupRowBy || '';
    this.columnDefs = Object.keys(this.tableData[0]).map(field => this.setColumnDef(field, groupBy));
    console.log(this.columnDefs)
  }

  setColumnDef(field: string, groupBy?: string) {
    let groupDefs = {};
    if (groupBy && field === groupBy) {
      groupDefs = { rowGroup: true, hide: true }
    }
    return { field, ...this.defaultColDef, ...this.getFilters(field), ...groupDefs }
  }
  getFilters(field: string) {
    const filterParams = { filterPlaceholder: 'abc' }
    let filter = { filter: 'agTextColumnFilter', filterParams }
    if (typeof (this.tableData[0][field]) === 'number') {
      filter = { filter: 'agNumberColumnFilter', filterParams: { filterPlaceholder: '2113' } }
    }
    return filter
  }

}
