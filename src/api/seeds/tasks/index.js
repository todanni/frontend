const outstandingTask = {
    title: "Fix reactive scaler bug",
    description: "A software bug is an error, flaw or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.",
    done: false,
    deadline: "2020-09-23T11:03:16.386273Z",
    creator: 1,
    assignee: 2,
    createdAt: "2020-12-20T11:03:16.386273Z",
    modifiedAt: "2020-12-21T11:03:16.386273Z",
    project: 1,
    labels: [1, 2, 3],
};

const completedTask = {
    title: "Research Cloud Run feasibility",
    description: "A software bug is an error, flaw or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.",
    done: true,
    deadline: "2020-09-23T11:03:16.386273Z",
    creator: 1,
    assignee: 2,
    createdAt: "2020-12-20T11:03:16.386273Z",
    modifiedAt: "2020-12-21T11:03:16.386273Z",
    completedAt: "2020-12-22T11:03:16.386273Z",
    deletedAt: "2020-12-23T11:03:16.386273Z",
    project: 1,
    labels: [1, 2, 3],
};

export const taskSeeder = server => {
    server.create('task', completedTask);
    server.create('task', outstandingTask);
};