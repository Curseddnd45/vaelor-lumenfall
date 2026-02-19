// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "~U]":
            case "Player":return img`
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
`;
            case "image1":
            case "arrowUp":return img`
. 4 . 
4 f 4 
. f . 
. f . 
. f . 
. f . 
a f 3 
8 f 2 
`;
            case "image2":
            case "arrowRight":return img`
8 a . . . . 4 . 
f f f f f f f 4 
2 3 . . . . 4 . 
`;
            case "image3":
            case "arrowDown":return img`
2 f 8 
3 f a 
. f . 
. f . 
. f . 
. f . 
4 f 4 
. 4 . 
`;
            case "image4":
            case "arrowLeft":return img`
. 4 . . . . 3 2 
4 f f f f f f f 
. 4 . . . . a 8 
`;
            case "image5":
            case "coin1":return img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "image6":
            case "coin2":return img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "playerWalkDown":
            case "anim1":return [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d d d d f 4 4 4 e e f . . . 
. f b b b b f 2 2 2 2 f 4 e . . 
. f b b b b f 2 2 2 2 f d 4 . . 
. . f c c f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. f f e 4 1 f d d f 1 4 e f . . 
f d f f e 4 d d d d 4 e f e . . 
f b f e f 2 2 2 2 e d d 4 e . . 
f b f 4 f 2 2 2 2 e d d e . . . 
f c f . f 4 4 5 5 f e e . . . . 
. f f . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f f f f d d d 4 e f . . . 
. . f d d d d f 2 2 2 f e f . . 
. . f b b b b f 2 2 2 f 4 e . . 
. . f b b b b f 5 4 4 f . . . . 
. . . f c c f f f f f f . . . . 
. . . . f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f f . 
. . e f e 4 d d d d 4 e f f d f 
. . e 4 d d e 2 2 2 2 f e f b f 
. . . e d d e 2 2 2 2 f 4 f b f 
. . . . e e f 5 5 4 4 f . f c f 
. . . . . f f f f f f f . f f . 
. . . . . . . . . f f f . . . . 
`];
            case "playerWalkUp":
            case "anim2":return [img`
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
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . f f e e e e f f . . . . . 
. . f e e e f f e e e f . . . . 
. . f f f f 2 2 f f f f . . . . 
. f f e 2 e 2 2 e 2 e f f . . . 
. f e 2 f 2 f f f 2 f e f . . . 
. f f f 2 f e e 2 2 f f f . . . 
. f e 2 f f e e 2 f e e f . . . 
f f e f f e e e f e e e f f . . 
f f e e e e e e e e e e f d f . 
. . f e e e e e e e e f f b f . 
. . e f f f f f f f f 4 f b f . 
. . 4 f 2 2 2 2 2 e d d f c f . 
. . e f f f f f f e e 4 f f . . 
. . . f f f . . . . . . . . . . 
`, img`
. . . . . f f f f . . . . . . . 
. . . f f e e e e f f . . . . . 
. . f e e e f f e e e f . . . . 
. f f f f f 2 2 f f f f f . . . 
. f f e 2 e 2 2 e 2 e f f . . . 
. f e 2 f 2 f f 2 f 2 e f . . . 
. f f f 2 2 e e 2 2 f f f . . . 
f f e f 2 f e e f 2 f e f f . . 
f e e f f e e e e f e e e f . . 
. f e e e e e e e e e e f . . . 
. . f e e e e e e e e f . . . . 
. e 4 f f f f f f f f 4 e . . . 
. 4 d f 2 2 2 2 2 2 f d 4 . . . 
. 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
. . . . f f f f f f . . . . . . 
. . . . f f . . f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . f f e e e e f f . . . . . 
. . f e e e f f e e e f . . . . 
. . f f f f 2 2 f f f f . . . . 
. f f e 2 e 2 2 e 2 e f f . . . 
. f e f 2 f f f 2 f 2 e f . . . 
. f f f 2 2 e e f 2 f f f . . . 
. f e e f 2 e e f f 2 e f . . . 
. f e e e f e e e f f e f f . . 
. f e e e e e e e e e e f f . . 
. f f e e e e e e e e f . . . . 
. f 4 f f f f f f f f e . . . . 
. f d d e 2 2 2 2 2 f 4 . . . . 
. f 4 e e f f f f f f e . . . . 
. . . . . . . . f f f . . . . . 
`];
            case "playerWalkRight":
            case "anim3":return [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`, img`
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . f f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . . e 2 2 2 e d d e b f . . 
. . . . f 4 4 4 f e e f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . . f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . f f 4 4 4 e d d e b f . . 
. . . f f f f f f e e f f . . . 
. . . . f f . . . f f f . . . . 
`];
            case "playerWalkLeft":
            case "anim4":return [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . f f e d d f 1 4 d 4 e e f . 
. f d d f d d d d 4 e e e f . . 
. f b b f e e e 4 e e f . . . . 
. f b b e d d 4 2 2 2 f . . . . 
. . f b e d d e 3 4 4 f f . . . 
. . . f f e e f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
. . . . f d d d e e e e e f . . 
. . . . f e 4 e d d 4 f . . . . 
. . . . f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`, img`
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . f f e d d f 1 4 d 4 e e f . 
. f d d f d d d d 4 e e e f . . 
. f b b f e e e 4 e e f f . . . 
. f b b e d d 4 2 2 2 f . . . . 
. . f b e d d e 2 2 2 e . . . . 
. . . f f e e f 4 4 4 f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`];
        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("json", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.
