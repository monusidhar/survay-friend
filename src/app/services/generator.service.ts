import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
   public token= new BehaviorSubject<any>('');
   public username= new BehaviorSubject<any>('');

    tockenReceiver(token:any){
        this.token.next(token);
    }
}
