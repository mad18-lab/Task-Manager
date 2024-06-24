import { Component, OnInit } from '@angular/core';
import { Task } from './homepage.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  public newTask:string = '';
  public tasks: Task[] = [];

  ngOnInit(): void {
    localStorage.clear();
  }

  public addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  public toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  public removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
