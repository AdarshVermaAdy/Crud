import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
onclick(){
  console.log('hello')
  this.router.navigate(['/login']);

}
}
