import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-map-filter-operator',
  templateUrl: './map-filter-operator.component.html',
  styleUrls: ['./map-filter-operator.component.css']
})
export class MapFilterOperatorComponent implements OnInit {

  constructor() { }

  data: any[] = [];
  filterdata: any[] = [];
  ngOnInit(): void {
  }

  myObservable = from([2, 4, 6, 8, 10, 12]);//It emits values one by one synchronously in the same execution cycle

  transformedData = this.myObservable.pipe(map((val) => {
    return val * 5; // this returns an observable which emits val*5
  }))

  filteredObs = this.transformedData.pipe(filter((val) => {
    return val % 4 === 0;
  }))

  getData() {
    this.transformedData.subscribe({
      next: (val: any) => {
        this.data.push(val)
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        alert("all the data is streamed")
      }
    })
  }

  getFilteredData(){
    this.filteredObs.subscribe({
      next: (val: any) => {
        this.filterdata.push(val)
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        alert("all the data is streamed")
      }
    })
  }

}
