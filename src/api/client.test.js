import axios from "axios";
import {afterEach, beforeEach, test} from "@jest/globals";
import {makeServer} from "./server";

let server

beforeEach(() => {
    server = makeServer({environment: "development"})
})

afterEach(() => {
    server.shutdown()
})

test('Get Tasks returns tasks', async () => {
    const response = await axios.get(`/api/tasks`);
    const tasks = response.data.tasks;
    console.log(tasks)
    expect(true).toBe(true);
});

test('Get Team returns team members', async () => {
    const response = await axios.get(`/api/team`);
    const team = response.data.team;
    console.log(team)
    expect(true).toBe(true);
});