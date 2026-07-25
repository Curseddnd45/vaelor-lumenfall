namespace SpriteKind {
    export const Map = SpriteKind.create()
    export const Tree = SpriteKind.create()
}
// the starting row of question marks
function scrambleCharacterName (name: string) {
    // ---- tweak these two for speed ----
    // ms between flicker frames (try 40-80)
    frameDelay = 55
    // ms to hold the finished name
    holdDelay = 250
    // -----------------------------------
    symbols = "!@#$%^&*()_+?><-="
    len = name.length
    let makeSymbols = (count: number) => {
        let str = ""
        for (let i = 0; i < count; i++) {
            str += symbols.charAt(randint(0, symbols.length - 1))
        }
        return str
    }
let wait = (ms: number) => {
        if (!skipPressed) {
            pause(ms)
        }
    }
for (let index = 0; index < len; index++) {
        placeholders = "" + placeholders + "?"
    }
    // ONE text sprite, styled to match the story label
    nameText = textsprite.create(placeholders, 6, 1)
    nameText.setBorder(0, 0, 1)
    nameText.setFlag(SpriteFlag.RelativeToCamera, true)
    nameText.setFlag(SpriteFlag.Ghost, true)
    nameText.z = scene.HUD_Z
    let show = (txt: string) => {
        nameText.setText(txt)
        nameText.left = 2
        nameText.bottom = 66
    }
show(placeholders)
wait(300)
show(makeSymbols(len))
wait(frameDelay)
show(makeSymbols(len))
wait(frameDelay)
for (let reveal = 1; reveal <= len; reveal++) {
        show(name.substr(0, reveal) + makeSymbols(len - reveal))
        wait(frameDelay)
    }
show(name)
wait(holdDelay)
// one glitch in the middle
    if (len > 1) {
        g = Math.floor(len / 2)
        show(name.substr(0, g) + makeSymbols(1) + name.substr(g + 1))
wait(frameDelay)
    }
    show(name)
wait(holdDelay)
nameText.destroy()
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
        mapOpen = false
        myMenu.close()
        controller.moveSprite(playerSprite)
        pauseMenuOpen = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // don't do anything while the pause menu is open
    if (pauseMenuOpen) {
        return
    }
    // if someone is talking, skip it
    if (dialogueActive) {
        skipPressed = true
        story.cancelCurrentCutscene()
        dialogueActive = false
        return
    }
    // otherwise, look for a sign to read
    if (playerSprite.isHittingTile(CollisionDirection.Left) || playerSprite.isHittingTile(CollisionDirection.Top) || playerSprite.isHittingTile(CollisionDirection.Right) || playerSprite.isHittingTile(CollisionDirection.Bottom)) {
        if (tileAroundSpriteIs(assets.tile`baseTransparency16`, playerSprite)) {
            sayLine("'To Volcano'", "Sign")
        }
        if (tileAroundSpriteIs(assets.tile`baseTransparency16`, playerSprite)) {
            sayLine("'To Ocean'", "Sign")
        }
        if (tileAroundSpriteIs(assets.tile`baseTransparency16`, playerSprite)) {
            sayLine("'To Mountain'", "Sign")
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
function sayLine (text: string, who: string) {
    dialogueActive = true
    skipPressed = false
    story.startCutscene(function () {
        story.printCharacterText(text, who)
        dialogueActive = false
    })
}
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
let g = 0
let nameText: TextSprite = null
let placeholders = ""
let len = 0
let symbols = ""
let holdDelay = 0
let frameDelay = 0
let skipPressed = false
let dialogueActive = false
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
story.setPagePauseLength(400, 400)
dialogueActive = true
skipPressed = false
story.startCutscene(function () {
    story.printCharacterText("Hello?", "???")
    story.printCharacterText("Helloooo?", "???")
    story.printCharacterText("Vae?", "???")
    story.printCharacterText("You awake?", "???")
    story.printCharacterText("*yawn* yes. Wait, who is it?", "You")
    story.printCharacterText("Me!", "???")
    story.printCharacterText("Oh, hey!", "You")
    scrambleCharacterName("Lyra")
    story.printCharacterText("Well then, come on out!", "Lyra")
    story.printCharacterText("We need your help!", "Lyra")
    controller.moveSprite(playerSprite)
    dialogueActive = false
})
