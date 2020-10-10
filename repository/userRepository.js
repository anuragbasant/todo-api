const sql = require("mssql");
const util = require("../util");

class UserRepository {
  async getById(userId) {
    try {
      await sql.connect(util.dbConfig);
      const result = await sql.query(
        `select ID as id, FIRST_NAME as firstName, LAST_NAME as lastName, EMAIL as email, PHOTO as photo FROM USERS where Id = ${userId}`
      );
      return result.recordset;
    } catch (err) {
      return err;
    }
  }

  async create(user) {
    try {
      console.log(user);
      await sql.connect(util.dbConfig);
      await sql.query(
        `insert into USERS(FIRST_NAME, LAST_NAME, EMAIL, PHOTO) values('${user.firstName}', '${user.lastName}', '${user.email}', ${user.photo})`
      );
      return {message: "new user added"};
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}


module.exports = UserRepository;


