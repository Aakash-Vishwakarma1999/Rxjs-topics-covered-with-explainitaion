import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  // taskService: TaskService = inject(TaskService);
  constructor(private taskService: TaskService) { }



  tasks: string[] = ["Task1", "Task2", "Task3"]

  ngOnInit(): void {
    this.taskService.CreateTask.subscribe((val) => {
      this.tasks.push(val)
    })
  }

}
