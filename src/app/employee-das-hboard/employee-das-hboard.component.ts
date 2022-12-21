import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup, Validators ,FormControl} from '@angular/forms';
import { EmployeeModel } from './employee-das-hboard.model';
import {ApiService} from 'src/app/shared/api.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MatPaginatorModule,MatPaginatorIntl, MatPaginator } from '@angular/material/paginator';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-employee-das-hboard',
  templateUrl: './employee-das-hboard.component.html',
  styleUrls: ['./employee-das-hboard.component.css']
})

export class EmployeeDasHboardComponent implements OnInit {
  reactForm:FormGroup = new FormGroup({});
  employeeModelObj:EmployeeModel= new EmployeeModel();
  employdata:any[]= [];
  storeSingleRecord: any;
  editStatusFlag: boolean = false;
  mymodel:any;
  changes = new Subject<void>();
  totalLength:any ;
  page: number = 1;
  p:any;
  


  @ViewChild(MatPaginator,{static: true})  paginator:any = MatPaginator;

  constructor(private fb :FormBuilder, private dbService: NgxIndexedDBService ) { }

  ngOnInit(): void {
    this.reactForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      mobile:['',[Validators.required,Validators.maxLength(10)]],
      salary:['',[Validators.required]],
     
    })
    this.GetEmploydetails();
    // this.paginator= this.reactForm.paginator;
  }
 

  PostEmployedetails(){

    this.dbService.add('CRUDTABLE', {
      name: this.reactForm.value.name,
      email: this.reactForm.value.email,
      mobile: this.reactForm.value.mobile,
      salary: this.reactForm.value.salary,
    })
    .subscribe((key) => {
      alert("Data added successfully");
      console.log('key: ', key);
      this.reactForm.reset();

      this.GetEmploydetails();
    });
  }

  GetEmploydetails(){

    this.dbService.getAll('CRUDTABLE').subscribe((CRUDTABLE) => {
      this.employdata =CRUDTABLE ;
      console.log("CRUDTABLE",this.employdata);

    });

  }

  DeleteEmployedetails(i: any){
    this.dbService.delete('CRUDTABLE', i).subscribe((status) => {
      console.log('Deleted?:', status);
      this.GetEmploydetails();
      // console.log("CRUDTABLE",this.employdata);
    }); 
  }

  getsinglerecord(email:any){
    this.dbService.getAllByIndex('CRUDTABLE', 'email', IDBKeyRange.only(email))
    .subscribe((kpis: any) => {
      console.log('kpis', kpis);
      this.reactForm.patchValue({
        name: kpis[0].name,
        email: kpis[0].email,
        salary: kpis[0].salary,
        mobile: kpis[0].mobile
      });

      this.storeSingleRecord = kpis;
      this.editStatusFlag = true;

    })
  }

EditEmployedetails(){

  this.dbService.update('CRUDTABLE', {
    id: this.storeSingleRecord[0].id,
    email: this.reactForm.value.email,
    name: this.reactForm.value.name,
    salary: this.reactForm.value.salary,
    mobile: this.reactForm.value.mobile
  })
  .subscribe((storeData) => {
    console.log('storeData: ', storeData);
  });
  
//   this.dbService.updateByKey('CRUDTABLE','email', email).subscribe((dbb:any)=>{
// console.log(dbb);
this.GetEmploydetails();
this.reactForm.reset();

  // })
}

}
