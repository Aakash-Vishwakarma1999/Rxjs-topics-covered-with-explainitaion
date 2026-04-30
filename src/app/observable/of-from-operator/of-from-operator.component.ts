import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from-operator',
  templateUrl: './of-from-operator.component.html',
  styleUrls: ['./of-from-operator.component.css']
})
export class OfFromOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.getAsyncData(),
    this.getSyncData()
  }
  arr1=[1,2,3,4,5];
  data: any[] = [];

  promiseData = new Promise((res, rej) => {
    res([10, 20, 30, 40, 50])
  })

  //converting the promise into an observable and emitting the response
  myObservable = from(this.promiseData)// will emmit the whole array at once [10, 20, 30, 40, 50]
  getAsyncData() {
    // subscribing to the observable
    this.myObservable.subscribe((val: any) => { // val is = [10, 20, 30, 40, 50]
      this.data = this.data.concat(val); // will concat sync and async data
      console.log("async data",val)
    })
  }

  // this work in synchronous way so this part will execute first
  obs$ = of(this.arr1,[20,30,40,50],"A",true)
  getSyncData(){
    this.obs$.subscribe((val)=>{
      this.data.push(val)
      console.log("sync data",val);
      
    })
  }

}
