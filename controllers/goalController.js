
const Goal = require('../models/Goal')

exports.createGoal = async(req,res)=>{

const goal = await Goal.create({
user:req.user,
title:req.body.title
})

res.json(goal)
}

exports.getGoals = async(req,res)=>{

const goals = await Goal.find({user:req.user})
res.json(goals)

}

exports.updateGoal = async(req,res)=>{

const goal = await Goal.findById(req.params.id)

if(!goal){
return res.status(404).json({message:"Goal not found"})
}

goal.title = req.body.title || goal.title

const updated = await goal.save()

res.json(updated)

}

exports.deleteGoal = async(req,res)=>{

const goal = await Goal.findById(req.params.id)

if(!goal){
return res.status(404).json({message:"Goal not found"})
}

await goal.deleteOne()

res.json({message:"Goal removed"})

}
