import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new BehaviorSubject<number>(100);
    // subject.next(2020);
    subject.subscribe(data => {console.log("Subscriber 1: "+data);});
    subject.subscribe(data => {console.log("Subscriber 2: "+data);});

    subject.next(2020);
    
    subject.subscribe(data => {console.log("Subscriber 3: "+data);});

    subject.next(2023)
  }



}
