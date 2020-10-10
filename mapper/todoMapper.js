const Todo = require("../model/todo");

class TodoMapper {
  map(recordset) {
    return new Todo(
      recordset[0].ID,
      recordset[0].DESCRIPTION,
      recordset[0].STARTED_DATE,
      recordset[0].FINISHED_DATE,
      recordset[0].STATUS,
      recordset[0].USERID
    );
  }
}

module.exports = TodoMapper;
