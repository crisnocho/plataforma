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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020003000200000000000000000002060101010101010702000000020000060404040404040404070000060107000504040404040404040800000a0b090005040404040404040b090000000000000a0404040b0b0b090000000200000000000a0b0b0000000000020006070002000000000000000002000604040404070000000000000000060104040404040407000200000000060b0b0b0b0b0b0b0b09000000000000000000000000000000000000020000000000060107000000000000000000020000000a0404070d0000020006010100000000000a0b0b07000000000a0b0b01070d00000000000000000000000000040407000000000000000000000000020b0b0900000000000002000002000002000000000000000d0006010101010101000000000002060101040404040404040000000000060404040404040404040400000200000a0b0b0b0b0b040404040402000000000000000000000a0b0b0b0b010107000000000000000000000000000b0b09000000020000000000000000000000000007000607000000000200000c000000000a010b040107000601010101000000000000000a0b09000a0b0b0b0b000000000000000000000000000000000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d`, img`
................
................
................
.............222
22222.......2...
....22..222.22..
.....2..222.22..
...222......22..
2222.........222
.......22.......
.....22..22.....
...22......2....
..2222222222....
................
....222.........
....2..2.....222
.....2222....222
22..............
..2.............
222.............
.........2222222
......222.......
.....2..........
.....2222222....
...........22222
222.............
222.............
....2.22........
....222.22.22222
.......222.22222
................
................
`, [myTiles.transparency16,sprites.castle.tilePath2,myTiles.tile2,myTiles.tile3,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,myTiles.tile5,myTiles.tile8,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
