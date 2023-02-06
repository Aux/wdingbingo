var bingoListVRChat;
var vrchatTiles;

function VRChat() {

    vrchatTiles = [
        '"Don't look at my butt"',
        'Homerun Contest 10k+',
        'Homerun Contest 20k+',
        'vrchat 3',
        'vrchat 4',
        'vrchat 5',
        'vrchat 6',
        'vrchat 7',
        'vrchat 8',
        'vrchat 9',
        'vrchat 10',
        'vrchat 11',
        'vrchat 12',
        'vrchat 13',
        'vrchat 14',
        'vrchat 15',
        'vrchat 16',
        'vrchat 17',
        'vrchat 18',
        'vrchat 19',
        'vrchat 20',
        'vrchat 21',
        'vrchat 22',
        'vrchat 23',
        'vrchat 24',
        'vrchat 25',
        'vrchat 26',
        'vrchat 27',
        'vrchat 28',
        'vrchat 29',
        'vrchat 30',
        'vrchat 31',
        'vrchat 32',
        'vrchat 33',
        'vrchat 34',
        'vrchat 35',
        'vrchat 36',
        'vrchat 37',
        'vrchat 38',
        'vrchat 39',
        'vrchat 40'
    ];

    bingoListVRChat = [..._.sample(vrchatTiles, 25)];
    console.log('bingoListVRChat loaded ' + bingoListVRChat.length  + ' tiles');
}
