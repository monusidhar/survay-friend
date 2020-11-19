import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { GeneratorService } from '../services/generator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {
  submitQs: FormGroup;
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
  // constructor(private http: HttpClient, private router : Router, private generatorService:GeneratorService) {
  //  }      
  submitQsResolver: FormGroup
  constructor(private http: HttpClient, private generatorService: GeneratorService, private route:ActivatedRoute) { }
  qs: any;
  id:any;
  username: any;
  count:number=0;
  liveObj:any={};

  ngOnInit(): void {
    this.submitQsResolver = new FormGroup({
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
    });
    this.getuerDetail();
    this.qs=this.getQuestions();
    this.matchQustion();
    console.log(this.id);
  }
  getuerDetail(){
    this.id= this.route.snapshot.queryParams.id;
    this.username= this.route.snapshot.queryParams.username;
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
  }
  // onSubmit(){
  //   this.http.post('https://survay-561ab.firebaseio.com/generator.json' , this.submitQs.value).subscribe(res => {
  //     console.log(this.submitQs.value);
  //     this.id= res.name;
  //     this.generatorService.tockenReceiver(this.id);
  //      this.router.navigate(['../success']);
  //   }); 
  // }





 
  // ngOnInit(): void {
  //   this.submitQsResolver = new FormGroup({
  //     color: new FormControl(null, Validators.required),
  //     fastfood: new FormControl(null, Validators.required)
  //   })


  // }

  getTocken(){
    // this.generatorService.token.subscribe(id=>{
    //   this.id= id;
    //   debugger
    // })
  return this.route.snapshot.queryParams.id;
   
  }

  matchQustion(){
    this.qs.subscribe(res=>{
      for(const elment in res){
        if(this.id == res[elment].id){
          debugger
          this.liveObj.liquid=res[elment].liquid;
          this.liveObj.life=res[elment].life;
          this.liveObj.place=res[elment].place;
          this.liveObj.taste=res[elment].taste;
          this.liveObj.important=res[elment].important;
          this.liveObj.prefer=res[elment].prefer;
          this.liveObj.hair=res[elment].hair;
          this.liveObj.mode=res[elment].mode;
          this.liveObj.time=res[elment].time;
          this.liveObj.flower=res[elment].flower;
        }
      }
      debugger
    });
  }
  onSubmit(){
    if(this.submitQsResolver.get('liquid').value == this.liveObj.liquid){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('life').value == this.liveObj.life){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('place').value == this.liveObj.place){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('taste').value == this.liveObj.taste){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('important').value == this.liveObj.important){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('prefer').value == this.liveObj.prefer){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('hair').value == this.liveObj.hair){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('mode').value == this.liveObj.mode){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('time').value == this.liveObj.time){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('flower').value == this.liveObj.flower){
      this.count=this.count+1;
    }
    console.log("your score is"+this.count);
  }

  getQuestions(){
   return this.http.get('https://survay-561ab.firebaseio.com/generator.json').pipe(
         map(responseData => {
             const postArray=[]
             for(const key in responseData){
                 if(responseData.hasOwnProperty(key)){
                     postArray.push({...responseData[key], id:key});
                 }
             }
             return postArray;
         })
       );
 }
}
