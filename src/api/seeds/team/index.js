export const acceptedTeamMember = { id: 1, status: "Accepted", userID: 1};

export const pendingTeamMember = { id: 2, status: "Pending", userID: 2};

export const invitedTeamMember = { id: 3, status: "Invited", userID: 3};

export const teamSeeder = server => {
    server.create('request', acceptedTeamMember);
    server.create('request', pendingTeamMember);
    server.create('request', invitedTeamMember);
}