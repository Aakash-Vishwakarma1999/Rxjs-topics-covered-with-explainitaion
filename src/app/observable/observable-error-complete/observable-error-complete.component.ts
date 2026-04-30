import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { } from 'timers';

@Component({
  selector: 'app-observable-error-complete',
  templateUrl: './observable-error-complete.component.html',
  styleUrls: ['./observable-error-complete.component.css']
})
export class ObservableErrorCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: any[] = [];

  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.error(new Error('Something went wrong. Please try again later')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.complete() }, 5000);
  })


  getAsyncData() {

    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val)
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        alert('all the data is streamed')
      }



    })
  }


}
