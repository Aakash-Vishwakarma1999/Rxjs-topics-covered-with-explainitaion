import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-observable-way2',
  templateUrl: './observable-way2.component.html',
  styleUrls: ['./observable-way2.component.css']
})
export class ObservableWay2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: any[] = [];

  // creating observable
  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 1000),
      setTimeout(() => { observer.next(2) }, 2000),
      setTimeout(() => { observer.next(3) }, 3000),
      setTimeout(() => { observer.next(4) }, 4000),
      setTimeout(() => { observer.next(5) }, 5000)
  });


  //suscribing to the observable
  getAsyncData() {
    this.myObservable.pipe(
      tap(val => this.data.push(val))
    ).subscribe();

    setTimeout(() => {
      this.myObservable1.subscribe(val=> console.log(val))
  }, 1000)

  }


  myObservable1 = new Observable((observer) => {
    observer.next("1");

    setTimeout(() => { observer.next(2) }, 1000)
  })



}

