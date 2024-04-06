import './style.css'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCKSIZE = 20
const BOARD_WIDTH = 9
const BOARD_HEIGHT = 9

canvas.width = BLOCKSIZE*BOARD_WIDTH
canvas.height = BLOCKSIZE*BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

//2. game loop

function update(){
  draw()
  window.requestAnimationFrame(update)
}

function draw(){
  context.fillStyle = '0000'
  context.fillRect(0,0,canvas.width, canvas.height)
}

update()