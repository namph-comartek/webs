'use strict';

const bcrypt = require('bcryptjs');

class PasswordUtils {
  constructor() {
    this.round = parseInt(process.env.SALT_ROUND) || 5;
  }

  hashSync(password) {
    return bcrypt.hashSync(password, this.round);
  }

  hash(password) {
    return bcrypt.hash(password, this.round);
  }

  compare(password, hash) {
    return bcrypt.compare(password, hash);
  }

  compareSync(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = new PasswordUtils();
