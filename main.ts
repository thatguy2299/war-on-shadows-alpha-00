let mySprite = sprites.create(img`
    . . . . . . . . 
    . 1 1 1 1 1 1 . 
    . 1 f 1 1 f 1 . 
    . 1 f 1 1 f 1 . 
    . 1 1 1 1 1 1 . 
    . . . 1 1 . . . 
    . 1 . 1 1 . 1 . 
    . . . 1 1 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
