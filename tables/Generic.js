var bingoListGeneric;
var dingTiles, chatTiles, donationTiles;

function Generic() {

    dingTiles = [
        '"Keep your thighs peeled"',
        'Vore',
        'Game is idle for more than 60 seconds',
        '"MODS!"',
        'Believers win',
        'Doubters win',
        '"Is the game bugged?", it was not',
        'Whiskey breaks the game somehow',
        'Raise your hand if...',
        '"Ok chat, last one", it was not',
        'g d 11',
        'g d 12',
        'g d 13',
        'g d 14',
        'g d 15',
        'g d 16',
        'g d 17',
        'g d 18',
        'g d 19',
        'g d 20'
    ];
    chatTiles = [
        'A chatter is sacrificed',
        'Daze is sacrificed',
        'Joel',
        '"LLLLLLLLLLLL"',
        '"wow wow wow wow wow wow"',
        'Wikidingo',
        'WV_Shep is drunk',
        '"Slam Buff Doge Slam"',
        '"Whiskey watch out!"',
        'g c 10',
        'g c 11',
        'g c 12',
        'g c 13',
        'g c 14',
        'g c 15',
        'g c 16',
        'g c 17',
        'g c 18',
        'g c 19',
        'g c 20'
    ];
    donationTiles = [
        'Someone resubs for over a year',
        'A founder resubs',
        '10 gift subs',
        '25 gift subs',
        '50 gift subs',
        '100 gift subs',
        '200 bits redeem',
        '666 bits redeem',
        '1000 bits redeem',
        '10000 bits redeem'
    ];

    bingoListGeneric = [..._.sample(dingTiles, 16), ..._.sample(chatTiles, 15), ..._.sample(donationTiles, 2)];
    console.log('bingoListGeneric loaded ' + bingoListGeneric.length  + ' tiles');
}
