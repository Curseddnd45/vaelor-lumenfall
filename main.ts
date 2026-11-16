namespace SpriteKind {
    export const Map = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const Weapon = SpriteKind.create()
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
function useWeapon () {
    timer.throttle("attack", 350, function () {
        if (currentWeapon == "bubble") {
            swingbubble()
        }
    })
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "up"
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
        menuLevel = 1
        pauseMenuOpen = true
        showMenu(1)
    } else {
        sprites.destroy(mapSprite)
        mapOpen = false
        menuLevel = 1
        myMenu.close()
        controller.moveSprite(playerSprite)
        pauseMenuOpen = false
    }
})
function showMenu (level: number) {
    menuLevel = level
    if (level == 1) {
        myMenu = miniMenu.createMenuFromArray(pauseMenu)
        myMenu.setTitle("Game Paused")
    } else if (level == 2) {
        myMenu = miniMenu.createMenuFromArray(inventoryMenu)
        myMenu.setTitle("Inventory")
    } else if (level == 3) {
        myMenu = miniMenu.createMenuFromArray(weaponsMenu)
        myMenu.setTitle("Weapons")
    }
    myMenu.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        menuNav(selection)
    })
}
function menuNav (selection: string) {
    if (selection == "Map") {
        if (!(mapOpen)) {
            mapSprite = sprites.create(assets.image`Map`, SpriteKind.Map)
            mapSprite.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
            mapOpen = true
        } else {
            sprites.destroy(mapSprite)
            mapOpen = false
        }
    } else if (selection == "Inventory") {
        myMenu.close()
        menuLevel = 2
        showMenu(2)
    } else if (selection == "Weapons") {
        myMenu.close()
        menuLevel = 3
        showMenu(3)
    } else if (selection == "Back") {
        myMenu.close()
        if (menuLevel == 3) {
            menuLevel = 2
            showMenu(2)
        } else {
            menuLevel = 1
            showMenu(1)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pauseMenuOpen) {
        return
    }
    if (dialogueActive) {
        skipPressed = true
        story.cancelCurrentCutscene()
        dialogueActive = false
        return
    }
    if (playerSprite.isHittingTile(CollisionDirection.Left) || playerSprite.isHittingTile(CollisionDirection.Top) || playerSprite.isHittingTile(CollisionDirection.Right) || playerSprite.isHittingTile(CollisionDirection.Bottom)) {
        if (tileAroundSpriteIs(assets.tile`signVolcano`, playerSprite)) {
            readASign = true
            sayLine("'To Volcano'", "Sign")
            readASign = false
        }
        if (tileAroundSpriteIs(assets.tile`signOcean`, playerSprite)) {
            readASign = true
            sayLine("'To Ocean'", "Sign")
            readASign = false
        }
        if (tileAroundSpriteIs(assets.tile`signMountain`, playerSprite)) {
            readASign = true
            sayLine("'To Mountain'", "Sign")
            readASign = false
        }
    }
    if (!(readASign)) {
        useWeapon()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "left"
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
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
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
        spawnEnemy(60, 60)
        spawnEnemy(120, 90)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "right"
    playerSprite.setImage(playerDeafultRght)
    characterAnimations.loopFrames(
    playerSprite,
    playerAnimRight,
    250,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = "down"
    playerSprite.setImage(playerDeafultDown)
    characterAnimations.loopFrames(
    playerSprite,
    playerAnimDown,
    250,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("enemyHit", 350, function () {
        sprites.changeDataNumberBy(otherSprite, "hp", -1)
        otherSprite.startEffect(effects.spray, 100)
        if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
            sprites.destroy(otherSprite, effects.disintegrate, 300)
        }
    })
})
function tileAroundSpriteIs (tile: Image, sprite: Sprite) {
    return sprite.tileKindAt(TileDirection.Bottom, tile) || sprite.tileKindAt(TileDirection.Right, tile) || sprite.tileKindAt(TileDirection.Top, tile) || sprite.tileKindAt(TileDirection.Left, tile)
}
function spawnEnemy (x: number, y: number) {
    e = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    e.setPosition(x, y)
    sprites.setDataNumber(e, "hp", 3)
    e.follow(playerSprite, 25)
}
function swingbubble () {
    // the weapon is called The Enchanted Bubble Blower
    bubble = sprites.create(assets.image`bubbleUp`, SpriteKind.Weapon)
    bubble.setFlag(SpriteFlag.GhostThroughSprites, false)
    bubble.setFlag(SpriteFlag.GhostThroughTiles, false)
    bubble.setFlag(SpriteFlag.GhostThroughWalls, false)
    bubble.z = -1
    if (facing == "up") {
        bubble.setPosition(playerSprite.x, playerSprite.y - 12)
    } else if (facing == "down") {
        bubble.setImage(assets.image`bubbleDown`)
        bubble.setPosition(playerSprite.x, playerSprite.y + 12)
    } else if (facing == "left") {
        bubble.setImage(assets.image`bubbleLeft`)
        bubble.setPosition(playerSprite.x - 12, playerSprite.y)
    } else {
        bubble.setImage(assets.image`bubbleRight`)
        bubble.setPosition(playerSprite.x + 12, playerSprite.y)
    }
    timer.after(150, function () {
        sprites.destroy(bubble)
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (playerInvincible) {
        return
    }
    playerInvincible = true
    playerHealth.value += -10
    scene.cameraShake(4, 200)
    sprite.setFlag(SpriteFlag.Invisible, true)
    timer.after(120, function () {
        sprite.setFlag(SpriteFlag.Invisible, false)
    })
    timer.after(800, function () {
        playerInvincible = false
    })
    if (playerHealth.value <= 0) {
        game.gameOver(false)
    }
})
let bubble: Sprite = null
let e: Sprite = null
let readASign = false
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
let playerInvincible = false
let playerHealth: StatusBarSprite = null
let playerSprite: Sprite = null
let pauseMenu: miniMenu.MenuItem[] = []
let inventoryMenu: miniMenu.MenuItem[] = []
let weaponsMenu: miniMenu.MenuItem[] = []
let menuLevel = 1
let pauseMenuOpen = false
let mapOpen = false
let facing = ""
let currentWeapon = ""
currentWeapon = "bubble"
facing = "down"
mapOpen = false
pauseMenuOpen = false
pauseMenu = [miniMenu.createMenuItem("Inventory", assets.image`inventoryIcon`), miniMenu.createMenuItem("Map", assets.image`mapIcon`), miniMenu.createMenuItem("Save & Quit", assets.image`saveAndQuitIcon`)]
inventoryMenu = [miniMenu.createMenuItem("Weapons", assets.image`inventoryIcon`), miniMenu.createMenuItem("Back", assets.image`inventoryIcon`)]
weaponsMenu = [miniMenu.createMenuItem("The Enchanted Bubble Blower", assets.image`bubbleIcon`), miniMenu.createMenuItem("Back", assets.image`inventoryIcon`)]
menuLevel = 1
playerSprite = sprites.create(assets.image`playerImage`, SpriteKind.Player)
playerHealth = statusbars.create(24, 4, StatusBarKind.Health)
playerHealth.max = 100
playerHealth.value = 100
playerHealth.setFlag(SpriteFlag.RelativeToCamera, true)
playerHealth.setPosition(20, 8)
playerInvincible = false
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
