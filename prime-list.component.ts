import { Component, OnInit, Input } from '@angular/core';
import { PrimeService } from 'src/prime/prime.service';
import {IPrime} from 'src/app/prime/prime.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prime-list',
  templateUrl: './prime-list.component.html',
  styleUrls: ['./prime-list.component.css']
})
export class PrimeListComponent implements OnInit {


    title = 'the title';
  stringJson: any ;
  stringObject:  any;
  y:string = '';
  primeNumber: string = "1000";
  primeList : Array<number> = [];
  primeNumberInt: number =0;
  
    constructor(private primeService: PrimeService) { }

    ngOnInit(): any {
       
     };


     generatePrime() {
      this.title += " generatePrime";
      this.primeNumberInt = Number( this.primeNumber); 
               
     this.stringJson= this.primeService.getPrimeList2(this.primeNumberInt);

     this.primeService.getPrimeList2(this.primeNumberInt).subscribe(data => {
       console.log(data);
       this.primeList = data;
     });
             
            
     console.log(this.primeList);
     //this.router.navigateByUrl('/prime-list')
  }
            
   
  }





