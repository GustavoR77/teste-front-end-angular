import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  constructor(private usersService: UserService) {}

  displayedColumns: string[] = ['name', 'cnpj', 'status', 'getdetails'];

  itemsQty = ELEMENT_DATA.length;
  mobileCheck = navigator.userAgent;
  dataSource = new MatTableDataSource<Users>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    const data = this.usersService.getUsers().subscribe((users) => {
      console.log('teste service', this.usersService);
      console.log('teste api', users);
    });
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

const ELEMENT_DATA: Users[] = [
  {
    name: 'Auto-Peças Joaquim LTDA.',
    cnpj: '000.000.000/00000-00',
    status: 'Inativo',
  },
  {
    name: 'Auto-Peças Joaquim LTDA.',
    cnpj: '000.000.000/00000-00',
    status: 'Inativo',
  },
  {
    name: 'Auto-Peças Joaquim LTDA.',
    cnpj: '000.000.000/00000-00',
    status: 'Inativo',
  },
  {
    name: 'Auto-Peças Joaquim LTDA.',
    cnpj: '000.000.000/00000-00',
    status: 'Inativo',
  },
];
