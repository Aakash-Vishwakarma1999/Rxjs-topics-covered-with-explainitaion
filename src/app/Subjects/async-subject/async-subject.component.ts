import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new AsyncSubject<number>();

    console.log("AsyncSubject");

    subject.next(1);
    subject.next(2);
    subject.next(3);
    
    subject.subscribe(val => console.log('A: ', val));
    subject.subscribe(val => console.log('B: ', val));

    

    subject.complete();
  }



}
