function User(name) {
  this.name = name;
  this.channels = [];
  this.subscribtions = [];

  this.subscribe = function (channel) {
    this.subscribtions.push(channel);
    channel.followers.push(this);
  };
}

function Channel(name, author) {
  this.name = name;
  this.author = author;

  this.followers = [];
  author.channels.push(this);

  this.banUser = function (user) {
    this.followers = this.followers.filter((follower) => follower !== user);
    user.subscribtions = user.subscribtions.filter((subscription) => subscription !== this);
  };
}

const rammfall = new User('Rammfall');
const oleh = new User('Oleh');
const olex = new User('Olex');
const myChannel = new Channel('HowTo', rammfall);

olex.subscribe(myChannel);
oleh.subscribe(myChannel);
