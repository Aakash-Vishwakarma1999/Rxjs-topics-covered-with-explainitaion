import { Component, OnInit } from '@angular/core';
import { funcObservable, functionObs } from 'src/app/Services/function&Observable';

@Component({
  selector: 'app-function-vs-observables',
  templateUrl: './function-vs-observables.component.html',
  styleUrls: ['./function-vs-observables.component.css']
})
export class FunctionVSObservablesComponent implements OnInit {

  constructor() { 
    //calling function
    console.log('before function');
    console.log(functionObs());
    console.log(functionObs());
    console.log('after function called'); 

    // calling observable
    console.log('before observable');
    funcObservable.subscribe((data=>{
      console.log(data);
      
    }))
    funcObservable.subscribe((data=>{
      console.log(data);
      
    }))
    console.log('after observable called'); 
    
    
  }

  ngOnInit(): void {
  }

}
