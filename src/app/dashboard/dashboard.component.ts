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
qs1:boolean=true;
qs2=false;
qs3=false;
qs4=false;
qs5=false;
qs6=false;
qs7=false;
qs8=false;
qs9=false;
qs10=false;
readyToSubmit:boolean=false;
  constructor(private http: HttpClient, private router : Router, private generatorService:GeneratorService) {
   }

  ngOnInit(): void {
    this.submitQs = new FormGroup({
      liquid: new FormControl(null, Validators.required),
      life: new FormControl(null, Validators.required)
    })
  }

  qus1(){
    this.qs2=true;
    this.qs1=false;
    console.log(this.qs1);
  }

  onclickAnswere(){
    this.readyToSubmit=true;
    console.log("i m onclickAnswere"+ this.qs1);
  }
  onSubmit(){
    this.http.post('https://survay-561ab.firebaseio.com/generator.json' , this.submitQs.value).subscribe(res => {
      console.log(this.submitQs.value);
      this.id= res.name;
      this.generatorService.tockenReceiver(this.id);
      // this.router.navigate(['../success']);
    }); 
  }
}
