controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 5 5 4 2 c c b b b . . . . . 
        . 5 5 4 2 c d 1 d 1 1 b . . . . 
        8 8 6 6 6 c 1 1 3 3 1 b . . . . 
        8 7 8 6 7 7 d d 5 5 3 d . . . . 
        8 7 7 8 6 6 d d 5 5 3 d . . . . 
        6 7 7 8 2 c 1 1 3 3 1 b . . . . 
        . 6 7 8 4 c d 1 d 1 1 b . . . . 
        5 5 6 6 5 4 c c b b b . . . . . 
        `, MON_VAISEAU, 400, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let BOB: Sprite = null
let projectile: Sprite = null
let MON_VAISEAU: Sprite = null
MON_VAISEAU = sprites.create(img`
    5 5 4 4 8 8 8 4 5 5 . . . . . . 
    5 4 4 8 8 . . . . . . . . . . . 
    4 4 8 8 . . . . . . . . . . . . 
    4 8 8 f . . . . . . . . . . . . 
    8 8 8 f 8 . . . . . . . . . . . 
    8 8 8 f 8 c . . . . . . . . . . 
    8 8 8 c 6 c 8 8 . . . . . . . . 
    8 8 6 c 6 c 6 8 8 f c f c c c c 
    6 6 6 e 6 8 9 9 6 f 6 f b d d d 
    6 6 6 e 9 8 8 8 . . . . . . . . 
    6 6 6 f 8 8 . . . . . . . . . . 
    6 9 9 f 8 . . . . . . . . . . . 
    4 6 6 8 . . . . . . . . . . . . 
    4 4 8 8 . . . . . . . . . . . . 
    5 4 4 8 8 . . . . . . . . . . . 
    5 5 4 4 8 8 8 4 5 5 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(MON_VAISEAU, 200, 200)
MON_VAISEAU.setStayInScreen(true)
info.setLife(3)
music.play(music.createSong(hex`0078000408030109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8008a0000000100010b0400050001030800090001090c000d000105100011000107180019000b0102030405060708090a0b20002100010b2400250001032800290001092c002d000105300031000107380039000b0102030405060708090a0b40004100010b4400450001034800490001094c004d000105500051000107580059000b0102030405060708090a0b`), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`0078000408020107001c00020a006400f4016400000400000000000000000000000000000000037000000004000325292c04000800012908000c00032225290c001000012510001400031e222514001800012218001c00031b1e221c002000011e20002400031b1e2224002800011e28002c00031e22252c0030000122300034000322252934003800012538003c000325292c3c0040000129`), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002420000000400012a04000800012a08000c00012710001400012418001c00011d20002400012024002800012728002c0001272c003000012a30003400012438003c000119`), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`0078000408020101001c000f05001202c102c201000405002800000064002800031400060200044a000000040001240400080001240c001000012410001400012a14001800011d1c0020000124200024000220272400280001242c003000012730003400012038003c0001273c004000021d20`), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`0078000408020107001c00020a006400f4016400000400000000000000000000000000000000036c0000000400012504000800012708000c0001290c001000012a1000140002272a1400180002202418001c0002191d1c002000021b1e200024000222252400280002292c28002c0002272a2c0030000220243000340002191d34003800021b1e38003c000222253c00400002292c`), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.onUpdateInterval(1000, function () {
    BOB = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 6 5 4 2 4 5 4 4 5 4 2 e e 
        . . . 6 6 5 2 5 4 2 5 2 2 e 2 2 
        . . . . 6 6 4 2 5 4 2 2 e 2 2 4 
        . . . . . 6 6 4 5 2 2 e f 4 4 2 
        . . . . . . 6 6 2 2 e e f 2 2 2 
        . . . . . . . 6 e e e 4 e 2 2 2 
        5 5 d b f 2 f 2 4 4 e 2 e 2 2 2 
        5 5 c c f c f e e 2 c 2 c 2 e e 
        . . . . . . . 6 e e c 2 c e e e 
        . . . . . . 6 6 2 2 c e f e c c 
        . . . . . 6 6 4 2 5 2 e f c c c 
        . . . . 6 6 5 4 2 4 2 2 f c c c 
        . . . 6 6 4 4 2 4 2 4 c c c c c 
        . . . 6 4 5 2 5 4 5 5 4 5 c c c 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    BOB.setVelocity(-100, 0)
    BOB.setPosition(160, randint(5, 150))
    BOB.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    pause(5000)
    projectile = sprites.createProjectileFromSprite(img`
        .5428888.............................45555......
        5488777788...........................244555.....
        58776666668..........................224455.....
        877676888668...542228888882222........224455....
        67676854286685542288777557882222444....52445....
        766788885288854228776655777782224445555522455...
        667688888.....5487667788887778222444555522455...
        7778888868.5542866778855448866822444455522445...
        76866888868888866668.554422286822244555222445...
        8888668688666668888.554422222868244555522245....
        88668778666668677768.55444222868444..5222455....
        .58676776888657667778..55444228844....22445.....
        5428776677755767688678..55555.........2445......
        .5428777666675785428878...............4455......
        ..542887777556854442288...............555.......
        5542222888866.........................55........
        `, MON_VAISEAU, 100, 0)
})
