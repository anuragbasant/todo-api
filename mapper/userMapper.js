const User = require("../model/user");

class UserMapper {
  map(recordset) {
    return new User(
      recordset[0].id,
      recordset[0].firstName,
      recordset[0].lastName,
      recordset[0].email,
      recordset[0].photo
    );
  }
}

module.exports = UserMapper;
