(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("lab2",
{ "compressionlevel":-1,
 "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79,
            79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79,
            79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 134, 79, 79, 79, 79, 79, 79, 133, 79,
            79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79,
            79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 98, 98, 98, 98, 79, 79, 79, 79, 79, 79,
            79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 98, 98, 98, 98, 79, 79, 79, 79, 79, 79,
            79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 98, 98, 98, 98, 79, 79, 79, 79, 79, 79,
            79, 134, 79, 79, 79, 79, 98, 98, 98, 98, 98, 98, 98, 98, 79, 79, 79, 79, 79, 79,
            79, 79, 79, 79, 79, 79, 98, 98, 98, 98, 98, 98, 98, 98, 98, 79, 79, 79, 79, 79,
            98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98],
         "height":10,
         "id":2,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 0, 120, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 93, 102, 162, 0, 0, 127, 128, 128, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 109, 0, 0, 0, 119, 127, 128, 136, 0, 135, 0, 0, 0, 101, 0, 0, 110, 94,
            0, 0, 0, 0, 0, 0, 118, 135, 109, 143, 128, 144, 110, 0, 0, 0, 0, 0, 0, 0,
            200, 0, 127, 128, 128, 128, 128, 144, 0, 0, 0, 0, 0, 0, 0, 199, 0, 192, 0, 0],
         "height":10,
         "id":5,
         "name":"decorations",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":6,
         "name":"background2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 90, 90, 90, 91, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 126, 105, 0, 0, 0, 121, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 122, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 89, 90, 90, 90, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            90, 90, 90, 90, 90, 131, 0, 0, 0, 0, 0, 0, 0, 0, 89, 90, 90, 130, 90, 90,
            0, 0, 0, 0, 0, 0, 124, 125, 125, 125, 125, 125, 125, 126, 97, 0, 0, 0, 0, 0],
         "height":10,
         "id":1,
         "name":"platforms",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":7,
         "name":"items",
         "objects":[
                {
                 "class":"",
                 "gid":145,
                 "height":16.75,
                 "id":2,
                 "name":"v1",
                 "rotation":0,
                 "visible":true,
                 "width":16.75,
                 "x":200,
                 "y":270.25
                }, 
                {
                 "class":"",
                 "gid":145,
                 "height":16.75,
                 "id":3,
                 "name":"v2",
                 "rotation":0,
                 "visible":true,
                 "width":16.75,
                 "x":214.125,
                 "y":270.625
                }, 
                {
                 "class":"",
                 "gid":292,
                 "height":32,
                 "id":4,
                 "name":"g1",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":99,
                 "y":225
                }, 
                {
                 "class":"",
                 "gid":285,
                 "height":32,
                 "id":5,
                 "name":"g2",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":400.5,
                 "y":64
                }, 
                {
                 "class":"",
                 "gid":286,
                 "height":32,
                 "id":6,
                 "name":"g3",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":534.5,
                 "y":224
                }, 
                {
                 "class":"",
                 "gid":311,
                 "height":32,
                 "id":8,
                 "name":"p1",
                 "rotation":0,
                 "visible":true,
                 "width":32,
                 "x":609.041666666667,
                 "y":224.708333333333
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0,
            25, 26, 27, 28, 29, 30, 31, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":10,
         "id":3,
         "name":"owlet",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"owlet"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":9,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":32,
 "tilesets":[
        {
         "columns":8,
         "firstgid":1,
         "image":"maps\/resources\/animated\/owlet.png",
         "imageheight":128,
         "imagewidth":256,
         "margin":0,
         "name":"owlet",
         "spacing":0,
         "tilecount":32,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":8,
         "firstgid":33,
         "image":"maps\/resources\/tilesets\/CastleTiles.png",
         "imageheight":224,
         "imagewidth":256,
         "margin":0,
         "name":"CastleTiles",
         "spacing":0,
         "tilecount":56,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":8,
         "firstgid":89,
         "image":"maps\/resources\/tilesets\/SewerTiles.png",
         "imageheight":224,
         "imagewidth":256,
         "margin":0,
         "name":"SewerTiles",
         "spacing":0,
         "tilecount":56,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":2,
         "firstgid":145,
         "image":"maps\/resources\/tilesets\/vial_key.png",
         "imageheight":32,
         "imagewidth":64,
         "margin":0,
         "name":"vial_key",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":2,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":8,
         "firstgid":147,
         "image":"maps\/resources\/tilesets\/InfernoTiles.png",
         "imageheight":224,
         "imagewidth":256,
         "margin":0,
         "name":"InfernoTiles",
         "spacing":0,
         "tilecount":56,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":9,
         "firstgid":203,
         "image":"maps\/resources\/tilesets\/lab-tileset.png",
         "imageheight":300,
         "imagewidth":300,
         "margin":0,
         "name":"lab-tileset",
         "spacing":0,
         "tilecount":81,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":8,
         "firstgid":284,
         "image":"maps\/resources\/tilesets\/items\/gljive.png",
         "imageheight":96,
         "imagewidth":256,
         "margin":0,
         "name":"gljive",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":24,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }, 
        {
         "columns":4,
         "firstgid":308,
         "image":"maps\/resources\/tilesets\/items\/pointers.png",
         "imageheight":64,
         "imagewidth":128,
         "margin":0,
         "name":"pointers",
         "objectalignment":"topleft",
         "spacing":0,
         "tilecount":8,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#000000"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":20
});