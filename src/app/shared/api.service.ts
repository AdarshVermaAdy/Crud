import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  PostEmploye(data:any){
return this.http.post<any>("http://localhost:3000/posts",data)
.pipe(map((res:any)=>{
  return res;
}))
  }
  GetEmploye(data:any){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
      }
  UpdateEmploye(data:any){
    return this.http.put<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
      }
      DeleteEmploye(data:any){
        return this.http.delete<any>("http://localhost:3000/posts")
        .pipe(map((res:any)=>{
          return res;
        }))
          }
}
