import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../global/services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private _taskService: TaskService, public _fb: FormBuilder) { 
    this.taskForm = this._fb.group({
      taskTitle: this._fb.control('',[Validators.required]),
      taskDescription: this._fb.control('',[Validators.required]),
      taskStatus: this._fb.control("NEW",[Validators.required])
    });
  }

  public taskList:any = []
  public showTaskCreationPopup:boolean = false;
  public error:any = {};
  public operationType = "CREATE";
  ngOnInit(): void {
    this.loadTask();
  }

  refreshTask(){
    console.log("refershing tasks")
    this.loadTask();
  }

  public loadTask(){
    this._taskService.getAllTasks().subscribe({
      next: (data:any) => this.taskList = data,
      error: (error) => console.log(error)
    })
  }

  toggleTaskCreationPopup(){
    console.log("toggling popup")
    this.showTaskCreationPopup = !this.showTaskCreationPopup;
  }

  taskForm:FormGroup;
  clearTaskForm(){
    console.log("clearning form");
    this.taskForm.reset();
  }
  createTask(){
    console.log("create task with payload");
    console.table(this.taskForm.value);
    this._taskService.addTask(this.taskForm.value).subscribe({
      next: (data:any) => {
        this.taskList.push(data);
        this.toggleTaskCreationPopup();
        this.clearTaskForm();
        Swal.fire({
          title: 'Success',
          text: 'Task Created Successfully',
          icon: 'success',
        });
        this.refreshTask();
      },
      error: (error:any) => {
        this.error = error;
        console.log(error)
      }
    })  
  }

  currentUpdateTask:any={};
  initiateTaskUpdation(taskData:any){
    console.log("in update initiation")
    this.taskForm.patchValue(taskData);
    this.currentUpdateTask = taskData;
    this.operationType = "UPDATE";
    this.toggleTaskCreationPopup();
  }

  updateTask(){
    this._taskService.updateTask(this.currentUpdateTask.id,this.taskForm.value).subscribe({
      next: (data:any) => {
        this.taskList.push(data);
        this.toggleTaskCreationPopup();
        this.clearTaskForm();
        Swal.fire({
          title: 'Success',
          text: 'Task Updated Successfully',
          icon: 'success',
        });
        this.refreshTask();
      },
      error: (error:any) => {
        this.error = error;
        console.log(error)
      }
    })  
  }
}
