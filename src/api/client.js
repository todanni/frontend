import axios from "axios";

const api = {
    tasks: "/api/tasks",
    projects: "/api/projects",
    labels: "/api/labels",
    team: "/api/team"
};

export const getTasks = async () => {
    const response = await axios.get(api.tasks);
    const tasks =  response.data.tasks;
    console.log("Response from GET tasks request: ")
    console.log(tasks)
    return tasks;
}

