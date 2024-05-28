export function cekPassword(user, password) {
  return user.verifyCredentials(user.username, password);
}
