const Todo  = require("../models/Todo")

exports.getTodo = async(req,res) => {
      try{
       //fetching all the documents 
        const todos= await Todo.find({});
       //response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"all todos are successfully  fetched"
       })
      }
      catch(error){
       res.status(500)
       .json({
        success:false,
        data:"failed",
        message:"failed to fetch todos"
       })
      }
}

exports.getTodoById = async (req,res) =>{
    try{
        const id =  req.params.id
     const todo = await Todo.findById({_id:id});
     if(!todo){
        res.status(404)
        .json({
            success:false,
            message:"Not found "
        })
     }
     else{
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Data found"
        })
     }
    }
    catch(err){
        res.status(500)
        .json({
            success:true,
            data:"not found",
            message:"Error while fetching"
        })
    }
}