import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';
import { RegisterModel } from './register.model';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ConfirmPasswordValidator } from '../login/customvalidators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup = new FormGroup({});
  employeeModelObj:RegisterModel= new RegisterModel();
  registerdata:any[]= [];

  constructor(public dialog: MatDialog,private dbService: NgxIndexedDBService,  private fb :FormBuilder
    ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    }

    )
    

    this.GetUserdetails();

  }
  PostUserdetails(){

    this.dbService.add('AUTHDATA', {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      password: this.myForm.value.password
    })
    .subscribe((key) => {
      alert("Data added successfully");
      console.log('key: ', key);
      this.myForm.reset();

      this.GetUserdetails();

    });
  }
  GetUserdetails(){

    this.dbService.getAll('AUTHDATA').subscribe((AUTHDATA) => {
      this.registerdata =AUTHDATA ;
      console.log("AUTHDATA",this.registerdata);

    });

  }
  get fn(){
    return this.myForm.controls;
    }
    

  openDialog() {
    this.dialog.open(ModelComponent);
  }

}
