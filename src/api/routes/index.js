export default function routes() {
    this.namespace = 'api';
    this.timing = 2000;

    // CRUD for tasks
    this.resource('tasks');

    // CRUD for projects
    this.resource('projects');

    // CRUD for labels
    this.resource('labels');

    // Get list of notifications
    this.get("notifications");

    // Team endpoints
    this.get("/team", (schema) => {
            return schema.requests.all();
        },
    )
}