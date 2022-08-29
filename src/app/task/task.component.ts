import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input("taskData") public taskData:any = {};

  public taskStatusValue=10;
  public descriptionLength=40;
  constructor() { }

  ngOnInit(): void {
    this.taskStatusValue = this.evaluateTaskProgress();
  }

  taskStatusList=["NEW","ASSIGNED","IN_PROGRESS","RESOLVED","IN_QA","READY_TO_RELEASE","COMPLETED"];
  taskStatusUnit=[10,15,20,50,75,85,100];
  evaluateTaskProgress():number{
    if(this.taskData && this.taskData.taskStatus != undefined){
      let index = this.taskStatusList.indexOf(this.taskData.taskStatus.toUpperCase());
      if(index != -1){
        return this.taskStatusUnit[index];
      }
    }
    return 0;
  }
}
