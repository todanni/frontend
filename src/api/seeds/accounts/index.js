const userBA = {
    firstName: 'Ben',
    lastName: 'Allen',
    email: 'ballen@mail.com',
    profilePicture: 'https://i.imgur.com/0ID9Knn.png'
};

const userBB = {
    firstName: 'Ben',
    lastName: 'Brockway',
    email: 'bbrockway@mail.com',
    profilePicture: ' '
};

const userOR = {
    firstName: 'Oliver',
    lastName: 'Roberts',
    email: 'robertso@mail.com',
    profilePicture: 'https://i.imgur.com/dcDwEK5.jpg'
};

const userAW = {
  firstName: 'Ashley',
  lastName: 'Williams',
  email: 'asriwi@mail.com',
  profilePicture: 'https://i.imgur.com/ibL476q.png'
};

const userDP = {
    firstName: 'Danni',
    lastName: 'Popova',
    profilePicture: 'https://i.imgur.com/l9ck5zj.png',
    email: 'dpopova@mail.com'
}

export const accountSeeder = server => {
    server.create('account', userBA);
    server.create('account', userBB);
    server.create('account', userOR);
    server.create('account', userAW);
    server.create('account', userDP);
}