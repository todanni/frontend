const assignmentNotification = {
    type: "assignment",
    message: "Research notification system task was assigned to you",
    read: true,
    createdAt: "2020-12-12T19:04:31Z",
    modifiedAt: "2020-12-12T19:04:31Z"
};

const requestNotification = {
    type: "request",
    message: "Ben Brockway sent you a friend request",
    read: true,
    createdAt: "2020-12-11T19:04:31Z",
    modifiedAt: "2020-12-12T19:04:31Z"
};

const shareNotification = {
    type: "share",
    message: "ToDanni project was shared with you",
    read: true,
    createdAt: "2020-12-11T19:04:31Z",
    modifiedAt: "2020-12-12T19:04:31Z"
};

const deadlineNotification = {
    type: "deadline",
    message: "Create GitHub PR task deadline is approaching",
    read: true,
    createdAt: "2020-11-12T19:04:31Z"
};

const completionNotification = {
    type: "completion",
    message: "Review new API definition task is now completed",
    read: true,
    createdAt: "2020-12-12T10:04:31Z"
};

export const notificationSeeder = server => {
    server.create('notification', shareNotification);
    server.create('notification', deadlineNotification);
    server.create('notification', completionNotification);
}