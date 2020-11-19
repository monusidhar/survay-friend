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
response= {};
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
      life: new FormControl(null, Validators.required),
      place: new FormControl(null, Validators.required),
      taste: new FormControl(null, Validators.required),
      important: new FormControl(null, Validators.required),
      prefer: new FormControl(null, Validators.required),
      hair: new FormControl(null, Validators.required),
      mode: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      flower: new FormControl(null, Validators.required)
    })
  }

  qus1(){
    this.qs1=false;
    this.qs2=true;
  }
  qus2(){
    this.qs2=false;
    this.qs3=true;
  }
  qus3(){
    this.qs3=false;
    this.qs4=true;
  }
  qus4(){
    this.qs4=false;
    this.qs5=true;
  }
  qus5(){
    this.qs5=false;
    this.qs6=true;
  }

  qus6(){
    this.qs6=false;
    this.qs7=true;
  }
  qus7(){
    this.qs7=false;
    this.qs8=true;
  }
  qus8(){
    this.qs8=false;
    this.qs9=true;
  }
  qus9(){
    this.qs9=false;
    this.qs10=true;
  }

  onclickAnswere(){
    this.readyToSubmit=true;
    console.log("i m onclickAnswere"+ this.qs1);
  }
  onSubmit(){
    this.http.post('https://survay-561ab.firebaseio.com/generator.json' , this.submitQs.value).subscribe(response => {
      console.log(this.submitQs.value);
      this.response= response;
      this.generatorService.tockenReceiver(this.response);
       this.router.navigate(['../success']);
    }); 
  }
}
