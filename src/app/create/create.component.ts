import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GeneratorService } from '../services/generator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  submitName: FormGroup;
  constructor(private generatorService: GeneratorService, private router: Router) { }

  ngOnInit(): void {
    this.submitName= new FormGroup({
      name: new FormControl(null)
    });
  }

  onSubmit(){
    this.generatorService.username.next(this.submitName.value);
    this.router.navigate(['./dashboard']);
  }
}
