import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit {
  mobileCheck = navigator.userAgent;
  invalidForm = false;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cnpj: new FormControl('', Validators.required),
    status: new FormControl('Ativo', Validators.required),
  });

  constructor(private usersService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      this.invalidForm = false;
      const obj = {
        name: this.userForm.value.name,
        cnpj: this.userForm.value.cnpj,
        status: this.userForm.value.status,
      };

      this.usersService.postUsers(obj).subscribe((data) => {
        if (data) {
          console.log(data);
        }
      });

      this.router.navigate(['']);

    } else {
      this.invalidForm = true;
    }
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
