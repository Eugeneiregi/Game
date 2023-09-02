import ReactDOMServer from 'react-dom/server';
import {getInputDirection} from './inputManager'
import React from 'react';
export const SPEED = 8

let gameBoardClear = '' 
let newSegments = 0
const snakeBody = [{x:11,y:11}]
export function Update() {
	addSegment()
	const inputDirection = getInputDirection()
	for(let i = snakeBody.length - 2; i>=0 ; i--){
		snakeBody[i+1] = {...snakeBody[i]}
	}
	snakeBody[0].x += inputDirection.x
	snakeBody[0].y += inputDirection.y

}

export function Draw(gameBoard) {
	gameBoardClear = gameBoard
	snakeBody.forEach(segment =>{
		gameBoard.current.innerHTML=gameBoard.current.innerHTML+'<div class="snake" style="grid-row-start:'+segment.y+'; grid-column-start:'+segment.x+';"></div>'
	})
}

export function expandSnake(amount){
	newSegments +=amount
}

export function onSnake(position,{ignoreHead = false} = {}){
	return snakeBody.some((segment,index)=>{
		if(ignoreHead && index === 0) return false
		return equalPositions(segment,position)
	})
}

function equalPositions(positionOne,positionTwo){
	return(positionOne.x===positionTwo.x && positionOne.y===positionTwo.y)
}

function addSegment(){
	for(let i = 0 ;i < newSegments; i++){
		snakeBody[snakeBody.length] = { ...snakeBody[ snakeBody.length - 1]}
	}
	//onsole.log("sdf");
	//console.log(gameBoardClear);
	newSegments = 0
}

export function getSnakeHead(){
	return snakeBody[0]
}

export function snakeIntersect(){
	return onSnake(snakeBody[0],{ignoreHead:true})
}