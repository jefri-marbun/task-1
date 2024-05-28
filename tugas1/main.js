import { CekUser } from './cekUser.js';
import { cekPassword } from './password.js';

const user = new CekUser('jefri', 1000, 'jefri', 'obeng');

const usernameToCheck = 'jefri';
const passwordToCheck = 'obeng';

if (user.cekUsername(usernameToCheck) && cekPassword(user, passwordToCheck)) {
  if (user.getSaldo() === 0) {
    console.log('Saldo = 0. tidak bisa buka rekening');
  } else {
    console.log(`Kamu dapat buka rekening. Name: ${user.getName()}, Saldo: ${user.getSaldo()}`);
  }
} else {
  console.log('Invalid username / password.');
}
