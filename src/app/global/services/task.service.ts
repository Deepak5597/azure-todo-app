import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "../constants/api.url";
import { CUSTOM_HEADERS } from "../constants/headers";

@Injectable()
export class TaskService {

    constructor(private _httpClient: HttpClient){}

    getAllTasks(){
        return this._httpClient.get(API_URL.TASKS_API_PREFIX);
    }

    getTaskById(taskId:string){
        return this._httpClient.get(API_URL.TASKS_API_PREFIX + taskId);
    }

    addTask(taskData:any){
        return this._httpClient.post(API_URL.TASKS_API_PREFIX, taskData ,{headers:CUSTOM_HEADERS});
    }

    updateTask(taskId:string,taskData:any){
        return this._httpClient.put(API_URL.TASKS_API_PREFIX + taskId, taskData ,{headers:CUSTOM_HEADERS});
    }

    deleteTask(taskId:string){
        return this._httpClient.delete(API_URL.TASKS_API_PREFIX + taskId);
    }
}