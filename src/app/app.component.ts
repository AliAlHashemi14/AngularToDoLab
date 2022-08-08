import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';

  TaskList:Todo[] = [
    {
      task: "Clean Room",
      completed: true
    },
    {
      task: "Wash Clothes",
      completed: false
    },
    {
      task: "Do Homework",
      completed: false
    },
    {
      task: "Watch One Piece",
      completed: false
    },
    {
      task: "Learn to code",
      completed: true
    }
  ];

  addTask(form:NgForm):void{
    let newTask: Todo = {
      task: form.form.value.task,
      completed: false
    };
    this.TaskList.push(newTask);
  }

  updateTask(task:Todo):void{
    task.completed = true;
  }
}
