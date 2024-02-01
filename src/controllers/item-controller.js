exports.get = (req, res, next) => {
    res.status(200).json('todoItem get');
}

exports.post = (req, res, next) => {
    res.status(200).json('todoItem added');
}