import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, fromEvent, interval, map } from 'rxjs';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.css']
})
export class DebounceOperatorComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {

    interval(1000)
      .pipe(debounce((value) => interval(value * 100)))
      .subscribe(data => {
        console.log(data);

      })
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(500), // wait 500ms after user stops typing
        map((event: any) => event.target.value)
      )
      .subscribe((value: string) => {
        this.searchText = value;
        console.log('API call with:', value);
      });
  }

}
