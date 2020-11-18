import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent implements OnInit {
  id: any;
  username: string;
  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
    // this.generatorService.username.subscribe(res => {
      
    // });
    this.generatorService.username.subscribe(res=>{this.username=res});
    this.generatorService.token.subscribe(res => {
      this.id= res;
      console.log('this is id'+res);
    });
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
