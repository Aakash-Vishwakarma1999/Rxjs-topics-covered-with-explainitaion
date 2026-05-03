import { Component, OnInit } from '@angular/core';
import { interval, throttle, timer } from 'rxjs';

@Component({
  selector: 'app-throttle-operator',
  templateUrl: './throttle-operator.component.html',
  styleUrls: ['./throttle-operator.component.css']
})
export class ThrottleOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // interval(1000)
    //   .pipe(throttle((value) => timer(2000)))
    //   .subscribe((data) => {
    //     console.log(data);

    //   })
    interval(500)
      .pipe(throttle((value) => timer(2000),{leading:true, trailing:true}))
      .subscribe((data) => {
        console.log(data);

      })
  }

}
