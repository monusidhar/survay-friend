import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent implements OnInit {
  id: any;
  username: any;
  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.generatorService.username.subscribe(res=>{
      this.username=res.name;
      console.log('this is username'+ res.name);
    });
    this.generatorService.token.subscribe(res => {  
      this.id= res.name;
      console.log('this is id'+res);
    });
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
