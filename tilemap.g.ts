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
            case "level1":return tiles.createTilemap(hex`1100200000000000000000000000000000000000000000000000000000000000000d0000000000000000000000000000000000000200000000020000000000000000000205010100010101010602000000020000050303030003030303030600000501060004030303000303030303070000090a08000403030300030303030a0800000000000009030303000a0a0a08000000020000000000090a0a000000000000020005060002000000000000000000020005030303030600000000000000000005010303030303030600020000000000050a0a0a0a0a0a0a0a0800000000000000000000000000000000000000020000000000000501060000000000000000000002000000090303060c00000200050101000000000000090a0a0600000000090a0a0001060c0000000000000000000000000000030306000000000000000000000d0002000a0a0800000000000002000002000002000000000000000e0c000501010101010100000000000002050101030303030303030000000000000503030303030303030303000000020000090a0a0a0a0a0303030303000200000000000000000000090a0a0a0a0001010600000000000000000000000000000a0a080000000200000000000000000d000000000006000506000000000200000b000000000009010a0301060005010101010000000000000000090a0800090a0a0a0a0000000000000000000000000000000000000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c00`, img`
................2
................2
................2
.............2222
22222.......2...2
....22..222.22..2
.....2..222.22..2
...222......22..2
2222.........2222
.......22.......2
.....22..22.....2
...22......2....2
..2222222222....2
................2
....222.........2
....2..2.....2222
.....2222....2222
22..............2
..2.............2
222.............2
.........22222222
......222.......2
.....2..........2
.....2222222....2
...........222222
222.............2
222.............2
....2.22........2
....222.22.222222
.......222.222222
................2
................2
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
