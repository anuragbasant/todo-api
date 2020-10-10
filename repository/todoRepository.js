const sql = require("mssql");
const util = require("../util");

class TodoRepository {
  async getById(todoId) {
    try {
      await sql.connect(util.dbConfig);
      const result = await sql.query(
        `select ID, DESCRIPTION, STARTED_DATE, FINISHED_DATE, STATUS, USERID FROM TODOS WHERE Id = ${todoId} `
      );
      return result.recordset;
    } catch (err) {
      return err;
    }
  }
}
module.exports = TodoRepository;
