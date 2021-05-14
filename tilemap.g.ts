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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10002000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000002000e00020000000000000000000205010101010101060200000002000005030303030303030306000005010600040303030303030303070000090a080004030303030303030a08000000000000090303030a0a0a08000000020000000000090a0a0000000000020005060002000000000000000002000503030303060000000000000000050103030303030306000200000000050a0a0a0a0a0a0a0a0800000000000000000000000000000000000002000000000005010600000000000000000002000000090303060c000002000501010000000000090a0a0600000000090a0a01060c00000000000000000000000000030306000000000000000000000d00020a0a0800000000000002000002000002000000000000000c000501010101010100000000000205010103030303030303000000000005030303030303030303030000020000090a0a0a0a0a03030303030200000000000000000000090a0a0a0a010106000000000000000000000000000a0a080000000200000000000000000d0000000006000506000000000200000b0000000009010a03010600050101010100000000000000090a0800090a0a0a0a000000000000000000000000000000000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath2,myTiles.tile2,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,myTiles.tile5,myTiles.tile8,myTiles.tile11,myTiles.tile3], TileScale.Sixteen);
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
            case "myTile9":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
