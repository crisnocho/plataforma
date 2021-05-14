namespace SpriteKind {
    export const Moneda = SpriteKind.create()
    export const cofre = SpriteKind.create()
    export const Wario = SpriteKind.create()
}
function tilemap2 () {
    scene.setBackgroundColor(9)
    tiles.setTilemap(tilemap`level1`)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        Moneda1()
        tiles.placeOnTile(moneda, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        personaje()
        tiles.placeOnTile(mario, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        cofre = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.cofre)
        tiles.placeOnTile(cofre, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
function enemigo2 () {
    enemigo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f . f . . . . . . f . . 
        . . . . . . . f . . . . f . f . 
        . . . f f . . . f . . f . . . f 
        . . f . . f f . f f f . . . . . 
        . f . . . . f f f 2 f . . f f . 
        . . . . . . f 2 2 2 f f f . f . 
        . . . . . . f 2 f 2 f . . . . f 
        . . . . . f f f f f f f f . . . 
        . . . f f . . . f . . . . f . . 
        . . f . . . . . . f . . . . f . 
        . f . . . . . . . . f . . . . f 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    enemigo.setVelocity(-50, 0)
    enemigo.setBounceOnWall(true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -100
    }
})
function personaje () {
    mario = sprites.create(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `, SpriteKind.Wario)
    controller.moveSprite(mario, 100, 0)
    mario.ay = 150
    scene.cameraFollowSprite(mario)
}
function Moneda1 () {
    moneda = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 f f f f 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Moneda)
    animation.runImageAnimation(
    moneda,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 f f f f 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 5 f f f 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . f 5 5 f 5 5 5 5 f . . . . 
        . . . . f 5 5 f 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . f 5 5 f 5 5 5 5 5 5 f . . . 
        . . . f 5 5 f f f 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Wario, SpriteKind.cofre, function (sprite, otherSprite) {
    otherSprite.destroy()
    game.over(true)
})
sprites.onOverlap(SpriteKind.Wario, SpriteKind.Moneda, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(100)
})
let enemigo: Sprite = null
let cofre: Sprite = null
let mario: Sprite = null
let moneda: Sprite = null
game.splash("el mejor juego")
effects.bubbles.startScreenEffect(8000)
pause(8000)
tilemap2()
enemigo2()
game.onUpdate(function () {
    mario.setImage(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `)
    if (mario.vx < 0) {
        mario.image.flipX()
    }
})
