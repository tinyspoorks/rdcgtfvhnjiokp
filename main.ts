enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Boy = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const entryway = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c f c . . . 
        . . . c c f f . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . c c c c c c c c . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 f f . . . 
        . . . c c f f . . . 
        . . . c c . . . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c f c . . . 
        . . . c c f f . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . c c c c c c c c . 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . f f c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . c c c c c c c c c 
        . c c c c c c c c . 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c f c c . . . 
        . . . f f c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . c c c c c c c c . 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . f f 4 4 . . . 
        . . . f f c c . . . 
        . . . . . c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c f c c . . . 
        . . . f f c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . f f c c . . . 
        `],
    70,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`final boss`, function (sprite, location) {
	
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        `],
    70,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c c 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c . 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . . d d d . . . . 
        . . . 4 4 . . . . . 
        . . . c c . . . . . 
        . . . c c . . . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c c 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c . 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . 4 d d d . . . . 
        . . c 4 4 4 . . . . 
        . . c c f f . . . . 
        . c c c f f . . . . 
        . c c . f f . . . . 
        `,img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c c 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c . 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . 4 d d d . . . . 
        . . 4 4 4 . . . . . 
        . c c 4 f . . . . . 
        c c c f f . . . . . 
        c c . f f . . . . . 
        `,img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c . 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c c 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . 4 d d d . . . . 
        . . c 4 4 . . . . . 
        . . c c f . . . . . 
        . c c c f . . . . . 
        . c c f f . . . . . 
        `,img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c . 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c c 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . . d d d . . . . 
        . . . 4 4 . . . . . 
        . . . c c . . . . . 
        . . f c c . . . . . 
        . . f c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c . 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c c 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . f d d d . . . . 
        . . f f 4 4 . . . . 
        . f f f c c . . . . 
        f f f . c c . . . . 
        f f . . c c . . . . 
        `,img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c . 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c c 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . . d d d . . . . 
        . . . 4 4 . . . . . 
        . . . c c . . . . . 
        . . f c c . . . . . 
        . . f c c . . . . . 
        `],
    90,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        c c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        . c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d . . . 
        . . . . . 4 4 . . . 
        . . . . . c c . . . 
        . . . . . c c . . . 
        . . . . . c c . . . 
        `],
    90,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . . c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c 4 c c c c c . 
        . c 4 4 c c c c c c 
        . . 4 4 4 4 c c c c 
        . . 4 4 4 c c c c . 
        . . . 4 c c c c . . 
        . . . d d d . . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . d d d d d . . . 
        . . . d d d . . . . 
        . . . 4 4 . . . . . 
        . . . c c . . . . . 
        . . . c c . . . . . 
        . . . c c . . . . . 
        `],
    90,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        c c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        . c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d . . . 
        . . . . . 4 4 . . . 
        . . . . . c c . . . 
        . . . . . c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        c c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        . c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d 4 . . 
        . . . . 4 4 4 c . . 
        . . . . f f c c . . 
        . . . . f f c c c . 
        . . . . f f . c c . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        c c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        . c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d 4 . . 
        . . . . . 4 4 4 . . 
        . . . . . f 4 c c . 
        . . . . . f f c c c 
        . . . . . f f . c c 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        . c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        c c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d 4 . . 
        . . . . . 4 4 c . . 
        . . . . . f c c . . 
        . . . . . f c c c . 
        . . . . . f f c c . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        . c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        c c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d . . . 
        . . . . . 4 4 . . . 
        . . . . . c c . . . 
        . . . . . c c f . . 
        . . . . . c c f . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        . c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        c c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d f . . 
        . . . . 4 4 f f . . 
        . . . . c c f f f . 
        . . . . c c . f f f 
        . . . . c c . . f f 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c 4 c c . 
        . c c c c c 4 4 c . 
        c c c c 4 4 4 4 . . 
        c c c c c 4 4 4 . . 
        . . c c c c 4 . . . 
        . . . . d d d . . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . d d d d d . . 
        . . . . d d d . . . 
        . . . . . 4 4 . . . 
        . . . . . c c . . . 
        . . . . . c c f . . 
        . . . . . c c f . . 
        `],
    90,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        c c c c c c c c c c 
        c c c c c c c c c c 
        . . c c c c c c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        `],
    70,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    currentlevel += 1
    text_list += 1
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile16`)
    startLevel()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . c c 4 4 4 4 c c . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c f f . . . 
        . . . c c . . . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        c c c 4 4 4 4 c c c 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        . . . c c . . . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        c c c 4 4 4 4 c c c 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c f f . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . c c 4 4 4 4 c c . 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . c c 4 4 4 4 c c . 
        . . c d d d d c . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . f f c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        c c e e e e e e c c 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . f f c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        c c e e e e e e c c 
        c c e e e e e e c c 
        . c 4 4 4 4 4 4 c . 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . f f c c . . . 
        . . . . . c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . f f c c . . . 
        . . . . . c c . . . 
        `,img`
        . . . c c c c . . . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c c c c c c c . 
        . c c e e e e c c . 
        . c e e e e e e c . 
        c c e e e e e e c c 
        c c 4 4 4 4 4 4 c c 
        . . c 4 4 4 4 c . . 
        . . . d d d d . . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . d d d d d d . . 
        . . . d d d d . . . 
        . . . 4 4 4 4 . . . 
        . . . c c c c . . . 
        . . . c c c c . . . 
        . . . f f c c . . . 
        `],
    70,
    true
    )
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`enemy1`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`myTile17`, function (sprite, location) {
    info.changeLifeBy(1)
    health.destroy()
    health.setImage(img`
        6 c c c c c c c c c c c c c c 8 
        c b d d d d d d d d d d d d d c 
        c b d d d d d d d d d d d d b c 
        c b b d d d d d d d d d d b b c 
        c c c c c c c d d c c c c c c c 
        9 c c c c c c f f c c c c c c 8 
        c b b b b b c f f c b b b b b c 
        c b b b b b b c c b b b b b b c 
        c b b b b b b b b b b b b b b c 
        c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 
        c c c c c c c c c c c c c c c c 
        c b b b b b b b b b b b b b b c 
        c b b b b b b b b b b b b b b c 
        c c b b b b b b b b b b b b c c 
        c c c c c c c c c c c c c c c c 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`enemy2`, function (sprite, location) {
	
})
function startLevel () {
    scene.cameraFollowSprite(playerSprite)
    tiles.placeOnRandomTile(Enemy_1, assets.tile`enemy1`)
    tiles.placeOnRandomTile(Enemy2, assets.tile`enemy2`)
    tiles.placeOnRandomTile(Enemy3, assets.tile`final boss`)
    if (currentlevel == 0) {
        tiles.setTilemap(tilemap`level24`)
        tiles.placeOnRandomTile(playerSprite, assets.tile`myTile16`)
        game.showLongText("MOVE with WASD.", DialogLayout.Bottom)
    } else if (currentlevel == 1) {
        tiles.setTilemap(tilemap`level24`)
        game.showLongText("Certain enemies might do more damage than you expect,", DialogLayout.Bottom)
        Enemy_1.setPosition(160, 50)
        Enemy11.setPosition(126, 92)
    } else if (currentlevel == 2) {
        tiles.setTilemap(tilemap`level44`)
        game.showLongText("so make sure to collect what you find in chests!", DialogLayout.Bottom)
    } else if (currentlevel == 3) {
        tiles.setTilemap(tilemap`level24`)
    } else if (currentlevel == 4) {
        tiles.setTilemap(tilemap`level24`)
    } else if (currentlevel == 5) {
        tiles.setTilemap(tilemap`level44`)
    } else if (currentlevel == 6) {
        tiles.setTilemap(tilemap`level24`)
        tiles.placeOnRandomTile(playerSprite, assets.tile`myTile16`)
    } else if (currentlevel == 7) {
        tiles.setTilemap(tilemap`level41`)
        scene.setBackgroundColor(12)
        game.splash("Congrats!", "You won!!")
        game.over(true, effects.confetti)
    } else {
    	
    }
    Enemy_1 = sprites.create(img`
        ...ffffff..............
        .fffffffff.............
        .ffffffffff............
        ffffffffffff...........
        fff1ffffffff...........
        ff11ffffffff...........
        ff111fffffff...........
        fff1fffffff............
        fffffffffff............
        fffffffffff............
        fffffffffff............
        ffffffffff.............
        .fffffffff.............
        .fffffffff.............
        .fffffffff.............
        .fffffffff.............
        .ffffffffff............
        .ffffffffff............
        .ffffffffff............
        .ffffffffff............
        .ffffffffff......fffff.
        .ffffffffff.....fffffff
        .ffffffffff.....ffff.ff
        ..ffffffffff...fffff..f
        ..ffffffffffffffffff..f
        ..ffffffffffffffffff...
        ..ffffffffffffffffff...
        ...fffffffffffffffff...
        ...ffffffffffffffff....
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy_1,
    [img`
        ....ffffff..............
        ..fffffffff.............
        ..ffffffffff............
        .ffffffffffff...........
        .fff1ffffffff...........
        .ff11ffffffff...........
        .ff111fffffff...........
        .fff1fffffff............
        .fffffffffff............
        .fffffffffff............
        .fffffffffff............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ..ffffffffff.....ffff.ff
        ...ffffffffff...fffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff...
        ...ffffffffffffffffff...
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ....ffffff..............
        ..fffffffff.............
        ..ffffffffff............
        .ffffffffffff...........
        .fff1ffffffff...........
        .ff11ffffffff...........
        .ff111fffffff...........
        .fff1fffffff............
        .fffffffffff............
        .fffffffffff............
        .fffffffffff............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ..ffffffffff.....ffff.ff
        ...ffffffffff...fffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff...
        ...ffffffffffffffffff...
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ....ffffff..............
        ..fffffffff.............
        ..ffffffffff............
        .ffffffffffff...........
        .fff1ffffffff...........
        .ff11ffffffff...........
        .ff111fffffff...........
        .fff1fffffff............
        .fffffffffff............
        .fffffffffff............
        .fffffffffff............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ..ffffffffff.....ffff.ff
        ...ffffffffff...fffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff...
        ...ffffffffffffffffff...
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ........................
        ...ffffff...............
        .fffffffff..............
        .ffffffffff.............
        ffffffffffff............
        ffffffffffff............
        fff1ffffffff............
        ff11ffffffff............
        ff111ffffff.............
        fff1fffffff.............
        fffffffffff.............
        .ffffffffff.............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ...ffffffffff....ffff.ff
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff.f.
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ........................
        ...ffffff...............
        .fffffffff..............
        .ffffffffff.............
        ffffffffffff............
        ffffffffffff............
        fff1ffffffff............
        ff11ffffffff............
        ff111ffffff.............
        fff1fffffff.............
        fffffffffff.............
        .ffffffffff.............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ...ffffffffff....ffff.ff
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff.f.
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ........................
        ...ffffff...............
        .fffffffff..............
        .ffffffffff.............
        ffffffffffff............
        ffffffffffff............
        fff1ffffffff............
        ff11ffffffff............
        ff111ffffff.............
        fff1fffffff.............
        fffffffffff.............
        .ffffffffff.............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ...ffffffffff....ffff.ff
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff.f.
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `],
    500,
    true
    )
    Enemy11 = sprites.create(img`
        ...ffffff..............
        .fffffffff.............
        .ffffffffff............
        ffffffffffff...........
        fff1ffffffff...........
        ff11ffffffff...........
        ff111fffffff...........
        fff1fffffff............
        fffffffffff............
        fffffffffff............
        fffffffffff............
        ffffffffff.............
        .fffffffff.............
        .fffffffff.............
        .fffffffff.............
        .fffffffff.............
        .ffffffffff............
        .ffffffffff............
        .ffffffffff............
        .ffffffffff............
        .ffffffffff......fffff.
        .ffffffffff.....fffffff
        .ffffffffff.....ffff.ff
        ..ffffffffff...fffff..f
        ..ffffffffffffffffff..f
        ..ffffffffffffffffff...
        ..ffffffffffffffffff...
        ...fffffffffffffffff...
        ...ffffffffffffffff....
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy11,
    [img`
        ....ffffff..............
        ..fffffffff.............
        ..ffffffffff............
        .ffffffffffff...........
        .fff1ffffffff...........
        .ff11ffffffff...........
        .ff111fffffff...........
        .fff1fffffff............
        .fffffffffff............
        .fffffffffff............
        .fffffffffff............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ..ffffffffff.....ffff.ff
        ...ffffffffff...fffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff...
        ...ffffffffffffffffff...
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ....ffffff..............
        ..fffffffff.............
        ..ffffffffff............
        .ffffffffffff...........
        .fff1ffffffff...........
        .ff11ffffffff...........
        .ff111fffffff...........
        .fff1fffffff............
        .fffffffffff............
        .fffffffffff............
        .fffffffffff............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ..ffffffffff.....ffff.ff
        ...ffffffffff...fffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff...
        ...ffffffffffffffffff...
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ....ffffff..............
        ..fffffffff.............
        ..ffffffffff............
        .ffffffffffff...........
        .fff1ffffffff...........
        .ff11ffffffff...........
        .ff111fffffff...........
        .fff1fffffff............
        .fffffffffff............
        .fffffffffff............
        .fffffffffff............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ..ffffffffff.....ffff.ff
        ...ffffffffff...fffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff...
        ...ffffffffffffffffff...
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ........................
        ...ffffff...............
        .fffffffff..............
        .ffffffffff.............
        ffffffffffff............
        ffffffffffff............
        fff1ffffffff............
        ff11ffffffff............
        ff111ffffff.............
        fff1fffffff.............
        fffffffffff.............
        .ffffffffff.............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ...ffffffffff....ffff.ff
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff.f.
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ........................
        ...ffffff...............
        .fffffffff..............
        .ffffffffff.............
        ffffffffffff............
        ffffffffffff............
        fff1ffffffff............
        ff11ffffffff............
        ff111ffffff.............
        fff1fffffff.............
        fffffffffff.............
        .ffffffffff.............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ...ffffffffff....ffff.ff
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff.f.
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `,img`
        ........................
        ...ffffff...............
        .fffffffff..............
        .ffffffffff.............
        ffffffffffff............
        ffffffffffff............
        fff1ffffffff............
        ff11ffffffff............
        ff111ffffff.............
        fff1fffffff.............
        fffffffffff.............
        .ffffffffff.............
        .ffffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..fffffffff.............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff............
        ..ffffffffff......fffff.
        ..ffffffffff.....fffffff
        ...ffffffffff....ffff.ff
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff..f
        ...ffffffffffffffffff.f.
        ....fffffffffffffffff...
        ....ffffffffffffffff....
        `],
    500,
    true
    )
    Enemy2 = sprites.create(img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy2,
    [img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `,img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `,img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `,img`
        ................
        .....fffffff....
        ....fffffffff...
        ....ffffffffff..
        ....ffffffffff..
        ....ffffffffff..
        ....ff55ffffff..
        ....f5555fffff..
        ...ffff55fffff..
        ...ffff55ffff...
        ....f.f5fffff...
        ......ffffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..fff..ffffffff.
        ..ff.f.ffffffff.
        ..ff.f.fffffffff
        .fff..fffffffff.
        .ffff.fffffffff.
        ..ffffffffffff..
        ..ffffffffffff..
        ...fffffffffff..
        ....fffffffff...
        .....fffffff....
        ......ffff......
        `,img`
        ................
        .....fffffff....
        ....fffffffff...
        ....ffffffffff..
        ....ffffffffff..
        ....ffffffffff..
        ....ff55ffffff..
        ....f5555fffff..
        ...ffff55fffff..
        ...ffff55ffff...
        ....f.f5fffff...
        ......ffffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..fff..ffffffff.
        ..ff.f.ffffffff.
        ..ff.f.fffffffff
        .fff..fffffffff.
        .ffff.fffffffff.
        ..ffffffffffff..
        ..ffffffffffff..
        ...fffffffffff..
        ....fffffffff...
        .....fffffff....
        ......ffff......
        `,img`
        ................
        .....fffffff....
        ....fffffffff...
        ....ffffffffff..
        ....ffffffffff..
        ....ffffffffff..
        ....ff55ffffff..
        ....f5555fffff..
        ...ffff55fffff..
        ...ffff55ffff...
        ....f.f5fffff...
        ......ffffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..fff..ffffffff.
        ..ff.f.ffffffff.
        ..ff.f.fffffffff
        .fff..fffffffff.
        .ffff.fffffffff.
        ..ffffffffffff..
        ..ffffffffffff..
        ...fffffffffff..
        ....fffffffff...
        .....fffffff....
        ......ffff......
        `],
    500,
    true
    )
    Enemey21 = sprites.create(img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemey21,
    [img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `,img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `,img`
        ......fffffff...
        .....fffffffff..
        .....ffffffffff.
        .....ffffffffff.
        .....ffffffffff.
        .....ff55ffffff.
        .....f5555fffff.
        ....ffff55fffff.
        ....ffff55ffff..
        .....f.f5fffff..
        .......ffffff...
        ........ffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..ff...ffffffff.
        .fff...ffffffff.
        .ff.f..ffffffff.
        .ff....fffffffff
        fff....ffffffff.
        ffff...ffffffff.
        .fff...ffffffff.
        .ffff.fffffffff.
        ..fffffffffffff.
        ...fffffffffff..
        ....fffffffff...
        ......ffff......
        `,img`
        ................
        .....fffffff....
        ....fffffffff...
        ....ffffffffff..
        ....ffffffffff..
        ....ffffffffff..
        ....ff55ffffff..
        ....f5555fffff..
        ...ffff55fffff..
        ...ffff55ffff...
        ....f.f5fffff...
        ......ffffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..fff..ffffffff.
        ..ff.f.ffffffff.
        ..ff.f.fffffffff
        .fff..fffffffff.
        .ffff.fffffffff.
        ..ffffffffffff..
        ..ffffffffffff..
        ...fffffffffff..
        ....fffffffff...
        .....fffffff....
        ......ffff......
        `,img`
        ................
        .....fffffff....
        ....fffffffff...
        ....ffffffffff..
        ....ffffffffff..
        ....ffffffffff..
        ....ff55ffffff..
        ....f5555fffff..
        ...ffff55fffff..
        ...ffff55ffff...
        ....f.f5fffff...
        ......ffffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..fff..ffffffff.
        ..ff.f.ffffffff.
        ..ff.f.fffffffff
        .fff..fffffffff.
        .ffff.fffffffff.
        ..ffffffffffff..
        ..ffffffffffff..
        ...fffffffffff..
        ....fffffffff...
        .....fffffff....
        ......ffff......
        `,img`
        ................
        .....fffffff....
        ....fffffffff...
        ....ffffffffff..
        ....ffffffffff..
        ....ffffffffff..
        ....ff55ffffff..
        ....f5555fffff..
        ...ffff55fffff..
        ...ffff55ffff...
        ....f.f5fffff...
        ......ffffffff..
        ........ffffff..
        ........fffffff.
        ........fffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        .......ffffffff.
        ..fff..ffffffff.
        ..ff.f.ffffffff.
        ..ff.f.fffffffff
        .fff..fffffffff.
        .ffff.fffffffff.
        ..ffffffffffff..
        ..ffffffffffff..
        ...fffffffffff..
        ....fffffffff...
        .....fffffff....
        ......ffff......
        `],
    500,
    true
    )
    Enemy3 = sprites.create(img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff...
        ...........fffff...f
        ...........fffff....
        ......ff....ffff....
        .....ffff.....ff....
        .f..fffff...........
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy3,
    [img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff...
        ...........fffff...f
        ...........fffff....
        ......ff....ffff....
        .....ffff.....ff....
        .f..fffff...........
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff...
        ...........fffff...f
        ...........fffff....
        ......ff....ffff....
        .....ffff.....ff....
        .f..fffff...........
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff...
        ...........fffff...f
        ...........fffff....
        ......ff....ffff....
        .....ffff.....ff....
        .f..fffff...........
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff...
        ...........fffff...f
        ...........fffff....
        ......ff....ffff....
        .....ffff.....ff....
        .f..fffff...........
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff..f
        ...........fffff....
        ......ff...fffff....
        .....ffff...ffff....
        .f..fffff.....ff....
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        ....................
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff..f
        ...........fffff....
        ......ff...fffff....
        .....ffff...ffff....
        .f..fffff.....ff....
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        ....................
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff..f
        ...........fffff....
        ......ff...fffff....
        .....ffff...ffff....
        .f..fffff.....ff....
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        ....................
        `,img`
        .......ffffff.......
        ......fffffffff.....
        .....fffffffffff....
        .....fff11fffffff...
        ....ff111fffffffff..
        ....ffffffffffffff..
        ...fffff111fffffff..
        ...fff1111ff1fffff..
        ...fff111fffffffff..
        ...ffffffff1fffff...
        ...fffffffffffff....
        ...fff1fffffff......
        ...fffff.fff........
        ....ffff............
        ....fff.............
        ....ff.....fff......
        ....ff....fffff.....
        .........fffffff....
        .........ffffffff...
        .........fffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        ........ffffffffff..
        .........fffffffff..
        .........fffffffff..
        .........fffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ..........ffffffff..
        ...........ffffff...
        ...........ffffff..f
        ...........fffff....
        ......ff...fffff....
        .....ffff...ffff....
        .f..fffff.....ff....
        .ff.fffff.........f.
        ..ffffff...f...f....
        f...ffff......fff...
        fffff.f......ffff...
        .....ff....f.ffff...
        ...............f....
        ....................
        `],
    500,
    true
    )
}
let Enemey21: Sprite = null
let Enemy11: Sprite = null
let Enemy3: Sprite = null
let Enemy2: Sprite = null
let Enemy_1: Sprite = null
let text_list = 0
let playerSprite: Sprite = null
let health: Sprite = null
let currentlevel = 0
scene.setBackgroundColor(15)
let userName = game.askForString("What is your name?")
let intro = 0
game.splash("Greetings, ", userName)
game.splash("You are about to embark on an adventure!")
currentlevel = 0
info.setLife(3)
health = sprites.create(img`
    . . c c c c c c c c c c c c . . 
    . c b d d d d d d d d d d b c . 
    c b d d d d d d d d d d d d b c 
    c b d d d d d d d d d d d d b c 
    c b d d d d d d d d d d d d b c 
    c b b d d d d d d d d d d b b c 
    c b b b b b b b b b b b b b b c 
    c b b b b b b b b b b b b b b c 
    c c c c b b b d d b b b c c c c 
    c c c c c c c f f c c c c c c c 
    c c c c c c c f f c c c c c c c 
    c b b b b b c c c c b b b b b c 
    c b b b b b b b b b b b b b b c 
    c c b b b b b b b b b b b b c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Food)
playerSprite = sprites.create(img`
    . . . c c c c . . 
    . c c c c c c c . 
    . c c c c c c c c 
    . c c c c c c c c 
    . c c c c c 4 c c 
    . c c c c c 4 4 c 
    c c c c 4 4 4 4 . 
    c c c c c 4 4 4 . 
    . . c c c c 4 . . 
    . . . . d d d . . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . d d d d d . 
    . . . . d d d . . 
    . . . . . 4 4 . . 
    . . . . . c c . . 
    . . . . . c c . . 
    . . . . . c c . . 
    `, SpriteKind.Player)
controller.moveSprite(playerSprite, 100, 100)
startLevel()
forever(function () {
    music.setVolume(60)
    music.playMelody("D D D D E F G G ", 140)
    music.playMelody("F F F A G F E E ", 140)
    music.playMelody("G F E D C D D - ", 140)
})
