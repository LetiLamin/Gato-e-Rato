var cat, imgCat, imgCat2, mouse, imgMouse, imgMouse2, garden, imgGarden
function preload() {
  //load the images here
  imgCat = loadImage('cat1.png')
  imgMouse = loadImage('mouse1.png')
  imgCat2 = loadImage('cat2.png', 'cat3.png')
  imgMouse2 = loadImage('mouse2.png', 'mouse3.png')
  imgGarden = loadImage('garden.png')
}

function setup() {
  createCanvas(1000, 800)
  //create tom and jerry sprites here
  cat = creteSprite(870, 600)
  cat.addAnimation('gatoSentado', imgCat)
  cat.scale = 0.2
  mouse = createSprite(220, 600)
  mouse.addAnimation('ratoEmPé', imgMouse)
  mouse.scale = 0.2
}

function draw() {
  background(imgGarden)
  //Write condition here to evalute if tom and jerry collide
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation('ÚltimaImagemGato', imgCat2)
    cat.changeAnimation('ÚltimaImagemGato')
    cat.x = 300
    cat.scale = 0.2
  }

  keyPressed()

  drawSprites()
}

function keyPressed() {
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    mouse.addAnimation('ratoProvocando', imgMouse2)
    mouse.changeAnimation('ratoProvocando')
    mouse.frameDelay = 25

    cat.velocityX = -5
  }
}
