import {SPEED,Update as snakeUpdate,Draw as snakeDraw,getSnakeHead,snakeIntersect} from './snake.js'
import {Update as foodUpdate,Draw as foodDraw,GRID_SIZE,SCORE} from './food.js'

let gameBoard = null
let scoreBoard =null
let lastRenderTime = 0
let gameStatus = false
let lastScore = 0
function main(currentTime) {
	if(gameStatus){
		if(lastScore<=SCORE)
			localStorage.setItem('SCORE',SCORE)
		if(window.confirm("Game Over.\n'Ok' to restart"))
			window.location='/'
		return
	}
	window.requestAnimationFrame(main)
	const secRenderTime = (currentTime-lastRenderTime)/1000
	if(secRenderTime < 1/SPEED ) return;
	lastRenderTime = currentTime
	update()
	draw()
}

function update() {
	snakeUpdate()
	foodUpdate()
	gameOver()
	scoreUpdate()
}

function scoreUpdate(){
	if(lastScore<SCORE)
			lastScore = SCORE
	scoreBoard.current.innerHTML = 'Score : '+SCORE+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbspHigh Score : '+lastScore
}

export function init(board,score) {
	gameBoard=board
	scoreBoard = score
	if(localStorage.getItem('SCORE'))
		lastScore = localStorage.getItem('SCORE')
 	window.requestAnimationFrame(main)
}

 function draw() {
 	gameBoard.current.innerHTML = ''
	snakeDraw(gameBoard)
	foodDraw(gameBoard)
}

function gameOver(){
	gameStatus = outSideBoard(getSnakeHead()) || snakeIntersect()
}

function outSideBoard(position){
	return(
			position.x < 1 || position.y > GRID_SIZE || position.y < 1 || position.x > GRID_SIZE
		)
}
//window.requestAnimationFrame(main)
