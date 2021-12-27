const validateTodo = (req, res, next) => {
    const {title} = req.body;
    if(!title){
      next('new Error')
    }
    next();
  };
  
module.exports = {
    validateTodo
}



