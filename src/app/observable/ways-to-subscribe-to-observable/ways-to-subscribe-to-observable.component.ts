import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer3 } from 'src/app/Services/observer3';

@Component({
  selector: 'app-ways-to-subscribe-to-observable',
  templateUrl: './ways-to-subscribe-to-observable.component.html',
  styleUrls: ['./ways-to-subscribe-to-observable.component.css']
})
export class WaysToSubscribeToObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const newObservable$ = new Observable<number>((observer) => {
      let timer = 0;

      for (let i = 0; i <= 5; i++) {
        observer.next(i)
      }
      observer.complete();
      observer.next(1000)
    });


    let observer = {
      next: (data: number) => console.log('observer 1: ', data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done')
    };
    // 1st way to subscribe
    newObservable$.subscribe(observer)

    // 2nd way to subscribe
    newObservable$.subscribe({
      next: (data: number) => console.log('observer 2: ', data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete all done')
    })

    // 3rd way using a service class 
    newObservable$.subscribe(new Observer3);






  }

}
