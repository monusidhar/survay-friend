import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { GeneratorService } from '../services/generator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {
  submitQsResolver: FormGroup
  constructor(private http: HttpClient, private generatorService: GeneratorService) { }
  qs: any;
  id:any;
  count:number=0;
  liveObj:any={};
  ngOnInit(): void {
    this.submitQsResolver = new FormGroup({
      color: new FormControl(null, Validators.required),
      fastfood: new FormControl(null, Validators.required)
    })

    this.qs=this.getQuestions();
    this.getTocken();
    this.matchQustion();
    console.log(this.id);
    debugger;
  }

  getTocken(){
    this.generatorService.token.subscribe(id=>{
      this.id= id;
    })
  }

  matchQustion(){
    this.qs.subscribe(res=>{
      for(const elment in res){
        if(this.id == res[elment].id){
          this.liveObj.color=res[elment].color;
          this.liveObj.fastfood=res[elment].fastfood;
        }
      }
    });
  }
  onSubmit(){
    if(this.submitQsResolver.get('color').value == this.liveObj.color){
      this.count=this.count+1;
    }
    if(this.submitQsResolver.get('fastfood').value == this.liveObj.fastfood){
      this.count=this.count+1;
    }
    console.log('your score is ='+this.count);
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
