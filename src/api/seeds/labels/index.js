const labelOne  = {
    title: "Front End",
    userID: 1,
    colour: "primary",
    createdAt: "2020-12-20T11:03:16.386273Z",
    abbr: "FE"
}

const labelTwo  = {
    title: "Back End",
    userID: 1,
    colour: "secondary",
    createdAt: "2020-12-20T11:03:16.386273Z",
    abbr: "BE"
}

const labelThree  = {
    title: "CI/CD",
    userID: 1,
    colour: "grey",
    createdAt: "2020-12-20T11:03:16.386273Z",
    abbr: "CI"
}


export const labelSeeder = server => {
    server.create('label', labelOne);
    server.create('label', labelTwo);
    server.create('label', labelThree);
}
