controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 2 2 2 2 . 
        . . . . . . . . . . . . 2 . . . 
        9 5 5 9 9 5 5 5 9 9 9 8 8 8 9 9 
        9 5 5 9 9 5 5 5 9 9 9 8 a 8 9 9 
        9 5 5 9 9 5 5 5 9 9 9 8 8 8 9 9 
        . . . . . . . . . . . . 2 . . . 
        . . . . . . . . . . 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
    scene.cameraShake(4, 500)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . a 8 . . . . . . . . . . . 
    . . 8 8 8 c . . . . . . . . . . 
    . 1 c a 1 a a c 1 c a 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 4 5 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 5 
    . . . . . . . . . . . . . 4 5 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        ....99999999........
        ...9555555599.......
        ..954444522299......
        .954ddddbbee299.....
        954d777766bee299....
        54d7ddd7666bee299...
        54d7ddd76666bee299..
        54d7ddd766666be229..
        54d7ddd7666666bee...
        54d7ddd766666be229..
        54d7ddd76666bee299..
        54d7ddd7666bee299...
        54d7ddd766bee299....
        954d7777bbee299.....
        .954ddddbee299......
        ..95444452229.......
        ...9555555599.......
        ...999999999........
        ....................
        ....................
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(scene.screenHeight() - 0, 10)
})
