export class User {
  constructor(name, saldo, username, password) {
    this.name = name;
    this.saldo = saldo;
    this.username = username;
    this.password = password;
  }

  getName() {
    return this.name;
  }

  getSaldo() {
    return this.saldo;
  }

  verifyCredentials(username, password) {
    return this.username === username && this.password === password;
  }
}
