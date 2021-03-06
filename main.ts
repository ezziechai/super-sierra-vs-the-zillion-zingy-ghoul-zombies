scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
    p1.say("I got the antidote!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player2, zomb) {
    info.changeLifeBy(-1)
    zomb.destroy()
    music.spooky.play()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        game.over(true)
    }
})
let zombie: Sprite = null
let p1: Sprite = null
p1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f d d d d d d f f f . . 
    . . f f d 8 8 8 8 8 8 d d f . . 
    . . f d 8 f f f f f f 8 d f . . 
    . . f f f f d d d d f f f f . . 
    . f f d f b f 7 7 f b f d f f . 
    . f d d 7 1 f 7 7 f 1 7 d d f . 
    . . f d d 7 7 7 7 7 7 d d f . . 
    . . . f d d 7 7 7 7 d d f . . . 
    . . d 7 f 8 8 8 8 8 8 f 7 d . . 
    . . 7 7 f 8 8 8 8 8 8 f 7 7 . . 
    . . 7 7 f 7 7 5 5 7 7 f 7 7 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(p1)
info.setLife(randint(1, 10))
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(p1, sprites.dungeon.collectibleInsignia)
game.showLongText("Hi! I'm Sierra!", DialogLayout.Bottom)
game.showLongText("I'm on an adventure to save the world from Iro!", DialogLayout.Bottom)
game.showLongText("Sadly, I'm a zombie.", DialogLayout.Bottom)
game.showLongText("Can you help me find the antidote in the temple?", DialogLayout.Bottom)
scene.cameraFollowSprite(p1)
forever(function () {
    music.playMelody("E D G F B A C5 B ", 120)
})
game.onUpdateInterval(500, function () {
    zombie = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff7777dff.......
        .......fd7777777df......
        .......f777777777f......
        ......fd7777777ffff.....
        ......fd777dd7c777df....
        ......fd77fbdf7d7dff....
        ......f77777dfdfdff.....
        ......f7d7ddfbffff......
        ......fdfdfbfbbbf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    zombie.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(zombie, sprites.dungeon.floorDarkDiamond)
    zombie.setVelocity(-50, 0)
})
game.onUpdateInterval(100, function () {
    zombie = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff7777dff.......
        .......fd7777777df......
        .......f777777777f......
        ......fd7777777ffff.....
        ......fd777dd7c777df....
        ......fd77fbdf7d7dff....
        ......f77777dfdfdff.....
        ......f7d7ddfbffff......
        ......fdfdfbfbbbf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    zombie.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(zombie, sprites.dungeon.floorDark4)
    zombie.setVelocity(-50, 0)
})
game.onUpdateInterval(200, function () {
    zombie = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff7777dff.......
        .......fd7777777df......
        .......f777777777f......
        ......fd7777777ffff.....
        ......fd777dd7c777df....
        ......fd77fbdf7d7dff....
        ......f77777dfdfdff.....
        ......f7d7ddfbffff......
        ......fdfdfbfbbbf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    zombie.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(zombie, sprites.dungeon.darkGroundSouthWest1)
    zombie.setVelocity(-50, 0)
})
game.onUpdateInterval(200, function () {
    zombie = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff7777dff.......
        .......fd7777777df......
        .......f777777777f......
        ......fd7777777ffff.....
        ......fd777dd7c777df....
        ......fd77fbdf7d7dff....
        ......f77777dfdfdff.....
        ......f7d7ddfbffff......
        ......fdfdfbfbbbf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    zombie.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(zombie, sprites.dungeon.floorLight5)
    zombie.setVelocity(-50, 0)
})
