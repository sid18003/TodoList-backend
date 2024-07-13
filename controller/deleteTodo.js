const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: "Deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error while deleting"
        });
    }
};
