import { AfterViewInit, Component, OnInit } from '@angular/core';
import { buffer, fromEvent, interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css']
})
export class BufferOperatorComponent implements OnInit, AfterViewInit {

  intervalData: number[] = [];
  showData$!: Observable<Event>;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // converting click event to an observable
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click')
  }

  startInterval() {
    interval(1000)
      .pipe(tap((data) => console.log(data)),
        buffer(this.showData$)).subscribe((data: number[]) => {
          this.intervalData.push(...data)
        })
  }

}
