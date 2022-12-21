import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from '../register/register.model';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  public authData: any;
  loginform:FormGroup = new FormGroup({});
  employeeModelObj:RegisterModel= new RegisterModel();
localdatastore:any[]=[];
  constructor(private router : Router,private fb :FormBuilder,private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(4)]],
     
    })
  }
 get fn() {

return this.loginform.controls;
 }
  login() {
    this.GetUserdetails();

    this.authData = [{
      email: this.loginform.value.email,
      password : this.loginform.value.password
    }]

    // let cred = [];
    this.localdatastore = [...this.localdatastore, this.loginform.value]

// console.log("my  data",this.loginform.value);

// console.log('auth',this.authData);

    // get data from auth table & store in variable
  // cred.push(this.authData);
  // console.log("my value",cred);

    // let slots:any = this.localdatastore.filter(slotobj=> {
    //   console.log('slotobj', slotobj);
    //   // console.log('this authdata', this.authData);
    //   if(this.authData.includes(slotobj.password == this.authData)){
    //     // console.log('slotobj.password', slotobj.password);
    //     console.log('slotobj.name', slotobj.name);
    //     slotobj.password == this.authData.password;
    //   }
    //   return slotobj;

    // });
    // console.log("slot",slots)
      // if (authData="localdatastore") {
//       this.router.navigateByUrl('/employee');
   
//   }
//   else(){
// alert('Incorrect Credentials');
//   }
  

 this.localdatastore.filter(slotobj=> {
  // console.log('slotobj', slotobj);
  // console.log('this authdata', this.authData);
  if(slotobj.email == this.authData[0]["email"]){
    console.log('slotobj.email', slotobj.email);
          this.router.navigate(['/employee']);
  }else{
    alert()
  }

});
  }

  GetUserdetails(){

    this.dbService.getAll('AUTHDATA').subscribe((AUTHDATA) => {
      this.localdatastore = AUTHDATA ;   
      console.log("all user data", this.localdatastore);

    });

  }

 onSubmit() {  
    this.router.navigate(['/register']);
  
  } 
}
