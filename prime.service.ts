import { Injectable, assertPlatform } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { IPrime } from 'src/prime/prime.interface';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class  PrimeService   {
    
    items: Array<number> = [];

	private primeUrl:string  = 'http://localhost:8080/primes2/1000';
	
       
    constructor(private httpClient: HttpClient) {}
		
	public getPrimeList(): any  {
        console.log('data is ' + this.httpClient.get<{type: IPrime[]}>(this.primeUrl))
            
       return this.httpClient.get<number>(this.primeUrl)
           .subscribe(
               data => console.log('SUCCESS: ' + JSON.stringify(data)),
               error => console.log('ERROR: ' + JSON.stringify(error))) 
        /*      
               return this.httpClient.get<number[]>(this.primeUrl).pipe(
                tap(_ => console.log('fethched date'))
               
              ); */
                  
    
        
	}
  
    public get(url: string, options?: any) { 
        return this.httpClient.get(url, options); 
    } 
}
