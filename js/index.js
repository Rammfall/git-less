function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.friends = [];

  this.getFullName = function () {
    return `${this.name} ${this.lastName}`;
  };

  this.addToFriend = function (friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  };

  this.getFriendsNames = function () {
    return this.friends
      .map((friend) => {
        return friend.name;
      })
      .join(', ');
  };
}

const bohdan = new User('Bohdan', 'Onatskyi');
const oleh = new User('Oleh', 'Bihma');
const will = new User('Will', 'Willer');
const john = new User('John', 'Johner');

bohdan.addToFriend(oleh);
bohdan.addToFriend(will);
bohdan.addToFriend(john);
