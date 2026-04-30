import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: any[] = [];

  // creating observable
  myObservable = new Observable((observer) => {
    observer.next([1, 2, 3, 4, 5]) //emitting the data
  })

  //suscribing to the observable
  getAsyncData() {
    this.myObservable.subscribe((val: any) => {
      this.data = val;
    })
  }
}
