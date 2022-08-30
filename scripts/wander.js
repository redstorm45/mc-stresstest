#!/bin/node

const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals: { GoalNear } } = require('mineflayer-pathfinder')

const bot = mineflayer.createBot({
  host: process.env.SERVER_IP,
  port: process.env.SERVER_PORT,
  username: process.env.PLAYER_NAME
})

const RANGE_GOAL = 256
const TRAVEL_DIST = Math.pow(1024, 2);

const TARGET_ANGLE = Math.random()*Math.PI*2.0;
const TARGET_POSITION = {
  x: Math.cos(TARGET_ANGLE)*TRAVEL_DIST,
  y: Math.sin(TARGET_ANGLE)*TRAVEL_DIST,
  z: 64
}

bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
  const mcData = require('minecraft-data')(bot.version)
  const defaultMove = new Movements(bot, mcData)

  bot.pathfinder.setMovements(defaultMove)
  bot.pathfinder.setGoal(new GoalNear(TARGET_POSITION.x, TARGET_POSITION.y, TARGET_POSITION.z, RANGE_GOAL))
})
