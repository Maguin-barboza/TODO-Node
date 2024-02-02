const repository = require('../repositories/item-repo');

exports.get = async (req, res, next) => {
    try {
        var todoItems = await repository.getAllTodoItems();
        res.status(200).json(todoItems);
    }
    catch(err) {
        res.status(401).json({msg: err});
    }
}

exports.getById = async(req, res, next) => {
    try {
        var todoItem = await repository.getById(req.params.id);
        res.status(200).json(todoItem);
    }
    catch(err) {
        res.status(401).json({msg: err});
    }
}

exports.post = async (req, res, next) => {
    try {
        const todoItem = await repository.Add(req.body);
        console.log(`todoItem:  ${todoItem}`);
        res.status(200).json(todoItem);
    }
    catch(err) {
        res.status(401).json({msg: err});
    }
}

exports.put = async (req,res,next) => {
    try {
        console.log('markItemDone');
        var todoItem = await repository.markItemDone(req.params.id);
        res.status(200).json(todoItem);
    }
    catch(err) {
        res.status(401).json({msg: err});
    }
}