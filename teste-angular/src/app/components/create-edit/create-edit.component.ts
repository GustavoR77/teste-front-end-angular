import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit {
  mobileCheck = navigator.userAgent;
  users: Users[] = [
    {
      name: '',
      cnpj: '',
      status: '',
    },
  ];

  userForm = new FormGroup({
    userFormControl: new FormControl(''),
  });

  constructor(private usersService: UserService) {}

  ngOnInit() {}

  addUser(data: any) {
    const obj = {
      name: data.target.name.value,
      cnpj: data.target.cnpj.value,
      status: data.target.status.value,
    };

    console.log('teste obj', obj);

    this.usersService.postUsers(obj).subscribe((data) => {
      if (data) {
        console.log(data);
      }
    });
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
