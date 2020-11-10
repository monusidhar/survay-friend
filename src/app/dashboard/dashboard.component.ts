import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
submitQs: FormGroup;
id: any;
  constructor(private http: HttpClient, private router : Router, private generatorService:GeneratorService) { }

  ngOnInit(): void {
    this.submitQs = new FormGroup({
      color: new FormControl(null, Validators.required),
      fastfood: new FormControl(null, Validators.required)
    })
  }
  onSubmit(){
    this.http.post('https://survay-561ab.firebaseio.com/generator.json' , this.submitQs.value).subscribe(res => {
      console.log(res);
      this.id= res.name;
      debugger
      this.generatorService.tockenReceiver(res.name);
      debugger
      this.router.navigate(['../success']);
    }); 
  }
}
