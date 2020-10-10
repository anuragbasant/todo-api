const TodoRepository = require('../repository/todoRepository');
const TodoMapper = require('../mapper/todoMapper');

class TodoService {
  constructor() {
    this.todoRepository = new TodoRepository();
    this.todoMapper = new TodoMapper();
  }

  async getTodoById(todoId) {
    const recordset = await this.todoRepository.getById(todoId);
    return  this.todoMapper.map(recordset);
  }
}

module.exports = TodoService;