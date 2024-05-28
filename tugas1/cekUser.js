import { User } from './user.js';

export class CekUser extends User {
  constructor(name, saldo, username, password) {
    super(name, saldo, username, password);
  }

  cekUsername(username) {
    return this.username === username;
  }
}

