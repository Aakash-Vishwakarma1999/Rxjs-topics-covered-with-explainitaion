import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const subject = new ReplaySubject<number>();
    console.log("ReplaySubject");
    
    subject.next(100);
    subject.next(200);
    subject.next(300);

    subject.subscribe((data)=> {console.log("Subscriber 1: "+data)});
    subject.subscribe((data)=> {console.log("Subscriber 2: "+data)});

    subject.next(2000);

    subject.subscribe((data)=> {console.log("Subscriber 3: "+data)});

    subject.next(2023);
  }

}
