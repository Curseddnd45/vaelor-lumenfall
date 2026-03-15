// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c00080003040b0b0b04040b040b0405010c0d0e0e0e0e0e0e0e0e060a0e0e0e0e0e0e0e0e0e0e060a0e0e0e0e0e0e0e0e0e0e06010e0e0e0e0e0e0e0e0e0e060a0e0e0e0e0e0e0e0e0e0e06010e0e0e0e0e0e0e0e0e0e0602080809090f080808080807`, img`
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 2 2 2 2 . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth1,myTiles.tile2,myTiles.tile3,sprites.dungeon.darkGroundCenter,tileUtil.door0], TileScale.Sixteen);
            case "level2":
            case "level3":return tiles.createTilemap(hex`1000100002030202020202040202020202020202020302020202050908030303030303020203020202020509080202030202030202020101020305090803020202020202020301010102050908030302020202020606060606060909090606060606060609090909090909090909090909090909070707070707090909070707070707070303020203030509080203030203030202030303030305090802020302020302020203030203050908020203030203020202030302030509080202010101030202020103020305090802020101010202020101030303050908020303010202020202020202020509080302020302020202020202020205090802020202020202`, img`
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,tileUtil.door0,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "bed1":
            case "tile3":return tile3;
            case "bed2":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
