// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000506070e070706070e060706060706030c1317131313131313131713131313080c1313151613131313131313131313090d1313080d131713131315161313130f11131308111313131313080d131213080d1713080d1313131313080d131313090c1315040216131317130f0d131313080c131406030d13131313080d131313080d131313080d131313130811131313090d131313080d13131317080d131313080c1713130f0d13131313080d1313130811131313080d131313130f0d131313080c131313081113171313080d171717090d131313080d13131313080d171717090c131313080d13131313080d1717170802010b1004020a0a0b1004020a0a0b04`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . . 2 2 . . . . . 2 2 . . . 2 
2 . . 2 2 . . . . . 2 2 . . . 2 
2 . . 2 2 . . . . . 2 2 . . . 2 
2 . 2 2 2 2 . . . . 2 2 . . . 2 
2 . 2 2 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . . . 2 2 . . . . 2 2 . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.doorOpenSouth,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairEast,sprites.dungeon.floorDark2,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "lockedChestClosed":
            case "tile1":return tile1;
            case "lockedChestOpen":
            case "tile2":return tile2;
            case "greenSwitchDown":
            case "tile3":return tile3;
            case "collectibleRedCrystal":
            case "tile4":return tile4;
            case "collectibleBlueCrystal":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
