 const asyncHanandler = require('express-async-handler')
 const Goal = require('../models/goalModel')


//  // @desc  Get all goals
//  // @route GET /api/goals
//  // @acess Private

 const getGoals = asyncHanandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json({goals})
 })

 // @desc  Set  goal
 // @route POST /api/goals
 // @acess Private

 const setGoal = asyncHanandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400) 
        throw new Error('Please add a text field')  
    }
    const goal = await Goal.create({
        text: req.body.text 
    }) 
    res.status(200).json({message: "Goal created successfully", goal})
})

 // @desc  Update  goal
 // @route PUT /api/goals/:id
 // @acess Private

 const updateGoal = asyncHanandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(404)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
        req.body, {
        new: true,
        runValidators: true
         })      
    res.status(200).json(updatedGoal)
})

 // @desc  delete goals
 // @route DELETE /api/goals
 // @acess Private

 const deleteGoal = asyncHanandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id) 
    if (!goal){
        res.status(404)
        throw new Error('Goal not found')
    }
     await Goal.findByIdAndDelete(req.params.id)
     res.status(200).json({ id:req.params.id})

 })
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}






