import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDasHboardComponent } from './employee-das-hboard/employee-das-hboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModelComponent } from './model/model.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const dbConfig: DBConfig = {
  name: 'CRUDDB',
  version: 1,
  objectStoresMeta: [{
    store: 'CRUDTABLE',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } },
      { name: 'mobile', keypath: 'mobile', options: { unique: false } },
      { name: 'salary', keypath: 'salary', options: { unique: true } }
    ]
  },
  {
    store: 'AUTHDATA',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } },
      { name: 'password', keypath: 'password', options: { unique: false } }
    ]
  }
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDasHboardComponent,
    LoginComponent,
    RegisterComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
