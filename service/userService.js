const UserRepository = require('../repository/userRepository');
const UserMapper = require('../mapper/userMapper');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.userMapper = new UserMapper();
  }

  async getUserById(userId) {
    const recordset = await this.userRepository.getById(userId);
    return this.userMapper.map(recordset);
  }

  async createUser(user){
    return this.userRepository.create(user);
  }
}

module.exports = UserService;
