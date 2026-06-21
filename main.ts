namespace SpriteKind {
    export const Map = SpriteKind.create()
    export const Tree = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.setImage(playerDeafultUp)
    characterAnimations.loopFrames(
    playerSprite,
    playerAnimUp,
    250,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door0, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    tiles.placeOnRandomTile(playerSprite, tileUtil.door0)
    if (tileUtil.currentTilemap() == crossroads) {
        scene.setBackgroundColor(7)
        playerSprite.y += 16
        tileUtil.coverAllTiles(tileUtil.door0, sprites.dungeon.doorOpenNorth)
        tileUtil.coverAllTiles(tileUtil.door1, sprites.castle.tilePath5)
    } else if (tileUtil.currentTilemap() == playerHouse) {
        scene.setBackgroundColor(12)
        playerSprite.y += -16
        tileUtil.coverAllTiles(tileUtil.door0, sprites.dungeon.doorOpenSouth)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(pauseMenuOpen)) {
        controller.moveSprite(playerSprite, 0, 0)
        myMenu = miniMenu.createMenuFromArray(pauseMenu)
        pauseMenuOpen = true
        myMenu.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        myMenu.setTitle("Game Paused")
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selection == "Map") {
                if (!(mapOpen)) {
                    mapSprite = sprites.create(assets.image`Map`, SpriteKind.Map)
                    mapSprite.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
                    mapOpen = true
                } else {
                    sprites.destroy(mapSprite)
                    mapOpen = false
                }
            }
        })
    } else {
        sprites.destroy(mapSprite)
        myMenu.close()
        controller.moveSprite(playerSprite)
        pauseMenuOpen = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerSprite.isHittingTile(CollisionDirection.Left) || playerSprite.isHittingTile(CollisionDirection.Top) || playerSprite.isHittingTile(CollisionDirection.Right) || playerSprite.isHittingTile(CollisionDirection.Bottom)) {
        if (tileAroundSpriteIs(assets.tile`‘To Volcano’`, playerSprite)) {
            story.printCharacterText("'To Volcano'", "Sign")
        }
        if (tileAroundSpriteIs(assets.tile`‘To Ocean’`, playerSprite)) {
            story.printCharacterText("'To Ocean'", "Sign")
        }
        if (tileAroundSpriteIs(assets.tile`‘To Mountain’`, playerSprite)) {
            story.printCharacterText("'To Mountain'", "Sign")
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.setImage(playerDeafultLeft)
    characterAnimations.loopFrames(
    playerSprite,
    playerAnimLeft,
    250,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door1, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door2)
    tiles.placeOnRandomTile(playerSprite, tileUtil.door1)
    if (tileUtil.currentTilemap() == crossroads) {
        scene.setBackgroundColor(7)
        playerSprite.y += -16
        tileUtil.coverAllTiles(tileUtil.door0, sprites.dungeon.doorOpenNorth)
        tileUtil.coverAllTiles(tileUtil.door1, sprites.castle.tilePath5)
        sprites.destroyAllSpritesOfKind(SpriteKind.Tree)
    } else if (tileUtil.currentTilemap() == oceanForest) {
        scene.setBackgroundColor(7)
        playerSprite.y += 16
        tileUtil.coverAllTiles(tileUtil.door1, sprites.castle.tilePath5)
        tileUtil.createSpritesOnTiles(sprites.builtin.forestTiles22, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            7 7 7 7 7 6 6 6 7 7 7 7 7 6 6 6 
            7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 6 7 7 7 7 6 7 7 7 7 7 6 7 7 7 
            7 7 6 7 7 6 7 7 7 6 7 7 6 7 6 7 
            7 7 6 7 6 6 7 7 6 6 6 7 6 6 6 6 
            6 7 6 6 6 6 7 6 6 6 6 6 8 6 6 6 
            8 8 6 6 8 6 6 6 8 6 6 6 8 8 6 6 
            8 e 6 e e 8 6 6 8 8 6 8 8 8 e 8 
            8 e e e e e 6 . 8 8 e e 8 e e . 
            . e e e e . 8 . . 8 e e e e . . 
            `, SpriteKind.Tree)
        tileUtil.createSpritesOnTiles(sprites.builtin.forestTiles21, img`
            . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 
            . 6 6 7 7 6 6 6 7 7 7 7 7 6 6 6 
            . 6 7 7 7 7 6 7 7 7 7 7 7 7 6 7 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            6 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 
            8 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            6 7 6 7 7 7 6 7 7 7 7 7 6 7 7 7 
            6 8 6 7 7 6 7 7 7 6 7 7 6 7 6 7 
            8 6 6 7 6 6 7 7 6 6 6 7 6 6 6 6 
            8 6 8 6 6 6 7 6 6 6 6 6 8 6 6 6 
            8 8 6 6 8 6 6 6 8 6 6 6 8 8 6 6 
            . . 6 . . 8 6 6 8 8 6 8 8 8 . 8 
            . . . . . . 6 e 8 8 e e 8 . . . 
            . . . . . . . . e 8 e e . . . . 
            `, SpriteKind.Tree)
        tileUtil.createSpritesOnTiles(sprites.builtin.forestTiles23, img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
            7 7 7 7 7 6 6 6 7 7 7 7 7 6 6 . 
            7 7 7 7 7 7 6 7 7 7 7 7 7 7 6 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
            7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 6 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 8 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
            7 6 7 7 7 7 6 7 7 7 7 6 7 7 7 6 
            7 7 6 7 7 6 7 7 7 6 7 7 6 6 8 6 
            7 7 6 7 6 6 7 7 6 6 6 7 6 6 6 8 
            6 7 6 6 6 6 7 6 6 6 6 6 8 6 6 8 
            8 8 6 6 8 6 6 6 8 6 6 6 8 8 8 8 
            8 e 6 e e 8 6 6 8 8 6 8 8 8 . . 
            8 e e e e e 6 e 8 8 . . 8 . . . 
            . e e e e . 8 e e . . . . . . . 
            `, SpriteKind.Tree)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.setImage(playerDeafultRght)
    characterAnimations.loopFrames(
    playerSprite,
    playerAnimRight,
    250,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.setImage(playerDeafultDown)
    characterAnimations.loopFrames(
    playerSprite,
    playerAnimDown,
    250,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
function tileAroundSpriteIs (tile: Image, sprite: Sprite) {
    return sprite.tileKindAt(TileDirection.Bottom, tile) || sprite.tileKindAt(TileDirection.Right, tile) || sprite.tileKindAt(TileDirection.Top, tile) || sprite.tileKindAt(TileDirection.Left, tile)
}
let mapSprite: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let oceanForest: tiles.TileMapData = null
let crossroads: tiles.TileMapData = null
let playerHouse: tiles.TileMapData = null
let playerDeafultDown: Image = null
let playerDeafultUp: Image = null
let playerDeafultRght: Image = null
let playerDeafultLeft: Image = null
let playerAnimDown: Image[] = []
let playerAnimUp: Image[] = []
let playerAnimRight: Image[] = []
let playerAnimLeft: Image[] = []
let playerSprite: Sprite = null
let pauseMenu: miniMenu.MenuItem[] = []
let pauseMenuOpen = false
let mapOpen = false
mapOpen = false
pauseMenuOpen = false
pauseMenu = [miniMenu.createMenuItem("Inventory", assets.image`inventoryIcon`), miniMenu.createMenuItem("Map", assets.image`mapIcon`), miniMenu.createMenuItem("Save & Quit", assets.image`saveAndQuitIcon`)]
playerSprite = sprites.create(assets.image`playerImage`, SpriteKind.Player)
playerAnimLeft = assets.animation`normalLeft`
playerAnimRight = assets.animation`normalRight`
playerAnimUp = assets.animation`normalUp`
playerAnimDown = assets.animation`normalDown`
playerDeafultLeft = img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `
playerDeafultRght = img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `
playerDeafultUp = img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `
playerDeafultDown = img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `
playerHouse = tilemap`playerHouse`
crossroads = tilemap`crossroads`
oceanForest = tilemap`level6`
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(playerHouse)
tiles.placeOnRandomTile(playerSprite, assets.tile`bed1`)
scene.cameraFollowSprite(playerSprite)
tileUtil.connectMaps(playerHouse, crossroads, MapConnectionKind.Door1)
tileUtil.connectMaps(crossroads, oceanForest, MapConnectionKind.Door2)
tileUtil.coverAllTiles(tileUtil.door0, sprites.dungeon.doorOpenSouth)
story.startCutscene(function () {
    story.printCharacterText("Hello?", "???")
    story.printCharacterText("Helloooo?", "???")
    story.printCharacterText("Vae?", "???")
    story.printCharacterText("You awake?", "???")
    story.printCharacterText("Er... yes?", "You")
    story.printCharacterText("Well then, come on out!", "???")
    story.printCharacterText("We need your help!", "???")
    controller.moveSprite(playerSprite)
})
