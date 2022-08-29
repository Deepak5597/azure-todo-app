import { environment } from "src/environments/environment"

const host = environment.API_HOST || "http//localhost:80000/";

export const API_URL = {
    TASKS_API_PREFIX : host + "/tasks/"
}