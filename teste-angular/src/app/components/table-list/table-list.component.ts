import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'getdetails'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  itemsQty = ELEMENT_DATA.length;
  mobileCheck = navigator.userAgent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getRecord(name: any) {
    alert(name);
  }

  mobileDevice() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        this.mobileCheck
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
export interface PeriodicElement {
  name: string;
  position: number | string;
  weight: number | string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'Auto-Peças Joaquim LTDA.',
    name: '000.000.000/00000-00',
    weight: 'Inativo',
  },
  {
    position: 'Auto-Peças Joaquim LTDA.',
    name: '000.000.000/00000-00',
    weight: 'Ativo',
  },
  {
    position: 'Auto-Peças Joaquim LTDA.',
    name: '000.000.000/00000-00',
    weight: 'Ativo',
  },
  {
    position: 'Auto-Peças Joaquim LTDA.',
    name: '000.000.000/00000-00',
    weight: 'Ativo',
  },
];
