class UsersStorage {
  constructor() {
    this.storage = [];
    this.id = 0;
  }

<<<<<<< HEAD
  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
=======
  addUser({ firstName, lastName }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName };
>>>>>>> 6e0789e936c9ee45a775f136032bb65c522ba89b
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

<<<<<<< HEAD
  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
=======
  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName };
>>>>>>> 6e0789e936c9ee45a775f136032bb65c522ba89b
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}

module.exports = new UsersStorage();
