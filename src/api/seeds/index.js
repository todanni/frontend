import {taskSeeder} from "./tasks";
import {labelSeeder} from "./labels";
import {notificationSeeder} from "./notifications";
import {projectSeeder} from "./projects";
import {accountSeeder} from "./accounts";
import {teamSeeder} from "./team";


export default function seeds(server) {
    // Seed projects
    projectSeeder(server);

    // Seed tasks
    taskSeeder(server);

    // Seed labels
    labelSeeder(server);

    // Seed notifications
    notificationSeeder(server);

    // Seed accounts
    accountSeeder(server);

    // Seed team members and requests
    teamSeeder(server);
}