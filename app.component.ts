import { Component } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { PrimeListComponent } from 'src/app/prime-list/prime-list.component';
import { PrimeService } from 'src/app/prime/prime.service';
import { IPrime } from 'src/app/prime/prime.interface';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  title = 'the title';
  stringJson: any ;
  stringObject:  any;
  y:string = '';

  constructor(
    private primeService: PrimeService
  ) {}

  generatePrime() : Observable<IPrime[]> {
         this.title += " generatePrime";
                  
        this.stringJson= this.primeService.getPrimeList();
                
        console.log( this.y);
        return this.stringJson;


     }
}
