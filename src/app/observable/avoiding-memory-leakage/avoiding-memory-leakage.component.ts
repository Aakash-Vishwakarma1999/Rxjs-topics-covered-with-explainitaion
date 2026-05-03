import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-avoiding-memory-leakage',
  templateUrl: './avoiding-memory-leakage.component.html',
  styleUrls: ['./avoiding-memory-leakage.component.css']
})
export class AvoidingMemoryLeakageComponent implements OnInit {

  timerConsoleSubscription!: Subscription;
  timerBrowserSubscription!: Subscription;

  timers: number[] = [];

  constructor() { }

  ngOnInit(): void {

    const newObservable$ = new Observable<number>(observer => {
      let i = 0;

      let interval = setInterval(() => {
        console.log('I let i :numbering');
        observer.next(i++);
        if (i == 6) {
          // observer.error("unknown error occured")
        }

      }, 1000);

      //teardown function = where cleanup happens
      // 🔄 When does this teardown run?
      //1️⃣ When you unsubscribe
      //2️⃣ When error() happens i.e observer.error(...)
      // 3️⃣ When complete() happens  i.e observer.complete()
      return () => {
        console.log('called when observer is unsubscribed');
        clearInterval(interval)

      }
    })


    this.timerConsoleSubscription = newObservable$.subscribe(data => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);

    })

    this.timerBrowserSubscription = newObservable$.subscribe(data => {
      this.timers.push(data)

    })
  }


  cancelTimer() {
    console.log('cancel the observable');

    this.timerConsoleSubscription.unsubscribe();//triggers cleanup
    this.timerBrowserSubscription.unsubscribe();//triggers cleanup

  }

}
