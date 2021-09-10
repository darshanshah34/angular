import { Component, OnInit, Input } from '@angular/core';
import { PrimeService } from 'src/prime/prime.service';
import {IPrime} from 'src/app/prime/prime.interface';

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
  primeList : Array<number> = [];
  
   

    constructor(private primeService: PrimeService) { }

    ngOnInit(): any {
        this.generatePrime();
     };


     generatePrime() {
      this.title += " generatePrime";
               
     this.stringJson= this.primeService.getPrimeList();

     this.primeService.getPrimeList2().subscribe(data => {
       console.log(data);
       this.primeList = data;
     });
             
            
     console.log(this.primeList);
     //this.router.navigateByUrl('/prime-list')
  }
            
   
  }





