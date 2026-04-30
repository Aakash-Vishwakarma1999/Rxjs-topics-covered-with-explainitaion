import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})


export class TaskService {
    // EventEmitter is for components
    // CreateTask: EventEmitter<string> = new EventEmitter<string>();

    // we can use Subject = same working as EventEmitter but diff implementation // Subject is for services
    CreateTask = new Subject<string>()

    // use emit for eventemitter and next for Subject
    OnCreateTask(value: string) {
        // this.CreateTask.emit(value)
        this.CreateTask.next(value)
    }
}