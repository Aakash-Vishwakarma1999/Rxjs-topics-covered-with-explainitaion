import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  
  typedText: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  sendTask() {
    this.taskService.OnCreateTask(this.typedText)
  }
}
