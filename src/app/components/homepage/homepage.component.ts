import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from './homepage.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  public newTask: string = '';
  public tasks: Task[] = [];
  public time: string='09:15:30';
  public timer: boolean = false;
  public showTasks: boolean = false;
  public emptyStr: boolean = false;
  @Output() showTimePicker = new EventEmitter<void>();

  ngOnInit(): void {
    localStorage.clear();
  }

  public addTask(event: Event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), completed: false, isEditing: false });
      this.newTask = '';
      this.showTasks = true;
      this.emptyStr = false; // Reset the variable if input is valid
    } else {
      this.emptyStr = true; // Set the variable if input is empty
    }
  }

  public addTime() {
    this.showTimePicker.emit();
  }

  public toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  public removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  public handleShowTimePickerEvent() {
    this.timer = true;
  }

  public editTask(task: Task) {
    task.isEditing = true;
  }

  public updateTask(task: Task) {
    task.isEditing = false;
  }
}
