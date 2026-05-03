import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribing-observable',
  templateUrl: './unsubscribing-observable.component.html',
  styleUrls: ['./unsubscribing-observable.component.css']
})
export class UnsubscribingObservableComponent implements OnInit {
  timerSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {

    const newObservable$ = interval(1000); // returns numbers starting 0 with a delay of 1sec

    this.timerSubscription = newObservable$.subscribe(data => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);

    })

  }

  cancelTimer() {
    console.log('cancel the observable');
    this.timerSubscription.unsubscribe()

  }

}
