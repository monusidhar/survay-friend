import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent implements OnInit {
  id: any;
  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.generatorService.token.subscribe(res => {
      this.id= res;
      debugger
      console.log('this is id'+res);
      debugger
    });
    debugger
  }

}
