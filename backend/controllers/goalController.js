 const asyncHanandler = require('express-async-handler')
 
 // @desc  Get all goals
 // @route GET /api/goals
 // @acess Private

 
 // @desc  Get all goals
 // @route GET /api/goals
 // @acess Private

 const getGoals = asyncHanandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})
 // @desc  Set  goal
 // @route POST /api/goals
 // @acess Private

 const setGoal = asyncHanandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400) 
        throw new Error('Please add a text field')  
    }
    res.status(200).json({message: 'Set goals'})
})
 // @desc  Update  goal
 // @route PUT /api/goals/:id
 // @acess Private

 const updateGoal = asyncHanandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
 // @desc  delete goals
 // @route DELETE /api/goals
 // @acess Private

 const deleteGoal = asyncHanandler(async (req, res) => {
     res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}






