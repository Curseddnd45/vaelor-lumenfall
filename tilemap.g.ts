// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tilesWeNeed":
            case "tilesWeNeed1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth], TileScale.Sixteen);
            case "playerHouse":
            case "level1":return tiles.createTilemap(hex`0d00070003040b0b0b0404040b040b0405010c0d0e0e0e0e0e0e0e0e0e060a0e0e0e0e0e0e0e0e0e0e0e060a0e0e0e0e0e0e0e0e0e0e0e06010e0e0e0e0e0e0e0e0e0e0e060a0e0e0e0e0e0e0e0e0e0e0e060208080909080f080808080807`, img`
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth1,myTiles.tile2,myTiles.tile3,sprites.dungeon.darkGroundCenter,tileUtil.door0], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardSpike], TileScale.Sixteen);
            case "crossroads":
            case "level3":return tiles.createTilemap(hex`0d000d000c0e0d0e0d0e100e0e0d0d0e0f010101010102030701010111011111010b02040404070b01110111010b020409090904070b1101110102040a1111010804070101140304060101110111050403120404040601111101110504040409090406011111010105040909010108040701010102040a010111010b0804030303040a0b01110111010b080404040a0b0111010111110101050406010111110101011101011315061101010101`, img`
2 2 2 2 2 . . . 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 2 2 
2 2 2 2 . . . . . 2 2 2 2 
2 2 2 . . . . . . . 2 2 2 
2 2 . . . 2 2 2 . . . 2 2 
2 . . . 2 2 2 2 2 . . . 2 
. . . . 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 . . . . 
2 2 . . . 2 2 2 . . . 2 2 
2 2 2 . . . . . . . 2 2 2 
2 2 2 2 . . . . . 2 2 2 2 
2 2 2 2 2 . . . 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tileGrass2,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenInnerSouthEast,tileUtil.door0,sprites.castle.tileGrass1,myTiles.tile6,myTiles.tile5,myTiles.tile1,tileUtil.door1], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`100010000605050505070204030605050505050706050505050702010a06050505050507060505050507080a0605050505050507060505050505050505050505050505070605050505050505050505050505050706050505070b0c0d0605050505050507060505050708090a060505050505050706050505050505050505050505050507060505050505050505050505050505070605050505050505050505050505050706050505070b0c0c0d06050505050507060505050702010103060505050505070605050507080901030605050505050706050505050507080a060505050505070605050505050505050505050505050706050505050505050505050505050507`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,tileUtil.door1,sprites.builtin.forestTiles22,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level7":
            case "level7":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "bed2":
            case "tile2":return tile2;
            case "bed1":
            case "tile3":return tile3;
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "signMountain":
            case "tile6":return tile6;
            case "signOcean":
            case "tile5":return tile5;
            case "signVolcano":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
