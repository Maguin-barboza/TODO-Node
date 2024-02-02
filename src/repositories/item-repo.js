const TodoItem = require('../Models/todoItem-model');

exports.getAllTodoItems = async () => {
    return await TodoItem.findAll();
}

exports.getById = async(id) => {
    return await TodoItem.findByPk(id);
}

exports.Add = (data) => {
    var todoItem = new TodoItem(data)
    return todoItem.save();
}

exports.markItemDone = async (id) =>  {
    await TodoItem.update({ Done: true },{
        where: {
            id: id
        }
    });
}