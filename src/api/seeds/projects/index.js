const projectOne = {
    title: "Default project",
    creator: 1,
    description: "This is your default project that's private to you.",
    createdAt: "2020-12-20T11:03:16.386273Z",
    modifiedAt: "2020-12-21T11:03:16.386273Z",
    members: ["5"],
    isDefault: true,
    progress: 25,
    logo: 'https://i.imgur.com/broken.png',
};

const projectTwo = {
    title: "Sentiment Seach",
    creator: 1,
    description: "This is Ashley's made up company that uses some sort of made up AI to compile reviews from social media and provide the info back to the restaurant owners in a compiled easily readable variant",
    createdAt: "2020-12-20T11:03:16.386273Z",
    modifiedAt: "2020-12-21T11:03:16.386273Z",
    members: ["1", "2", "5"],
    isDefault: false,
    progress: 50,
    logo: 'https://i.imgur.com/broken.png',
};

const projectThree = {
    title: "Verint",
    creator: 1,
    description: "Some project description",
    createdAt: "2020-12-20T11:03:16.386273Z",
    modifiedAt: "2020-12-21T11:03:16.386273Z",
    members: ["1", "2", "3", "4", "5"],
    isDefault: false,
    progress: 75,
    logo: 'https://i.imgur.com/broken.png',
};

export const projectSeeder = server => {
    server.create('project', projectOne);
    server.create('project', projectTwo);
    server.create('project', projectThree);
}