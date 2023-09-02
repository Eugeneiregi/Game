import {getInputDirection} from './inputManager'
import {onSnake,expandSnake} from './snake'

export let SPEED = 10
export const GRID_SIZE = 40
export let SCORE = 0
let foodPosition = getFoodPosition()
let EXPANTION_RATE = 5

export function Update() {
	if(onSnake(foodPosition)){
		expandSnake(EXPANTION_RATE)
		foodPosition= getFoodPosition()
		SCORE += EXPANTION_RATE
	}
	if(SCORE>40){
		EXPANTION_RATE = 7
		SPEED = 11
	}

}

export function Draw(gameBoard) {
		gameBoard.current.innerHTML=gameBoard.current.innerHTML+'<div class="apple" style="grid-row-start:'+foodPosition.y+'; grid-column-start:'+foodPosition.x+';"></div>'
}

function getFoodPosition(){
	let newFoodPosition
	while(newFoodPosition == null || onSnake(newFoodPosition)){
		newFoodPosition = randomGridPosition()
	}
	return newFoodPosition
}

function randomGridPosition(){
	return{
		x : Math.floor(Math.random()*GRID_SIZE)+1 ,
		y : Math.floor(Math.random()*GRID_SIZE)+1
	}
}

