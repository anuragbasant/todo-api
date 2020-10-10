class Todo{
    constructor(id, description, createdDate, finishedDate, status, userId){
        this.id = id;
        this.description = description;
        this.createdDate = createdDate;
        this.finishedDate = finishedDate;
        this.status = status;
        this.userId = userId;
    }
}
module.exports = Todo;