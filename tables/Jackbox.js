var bingoListJackbox;
var jackboxTiles;

function Jackbox() {

    jackboxTiles = [
        'jackbox 1',
        'jackbox 2',
        'jackbox 3',
        'jackbox 4',
        'jackbox 5',
        'jackbox 6',
        'jackbox 7',
        'jackbox 8',
        'jackbox 9',
        'jackbox 10',
        'jackbox 11',
        'jackbox 12',
        'jackbox 13',
        'jackbox 14',
        'jackbox 15',
        'jackbox 16',
        'jackbox 17',
        'jackbox 18',
        'jackbox 19',
        'jackbox 20',
        'jackbox 21',
        'jackbox 22',
        'jackbox 23',
        'jackbox 24',
        'jackbox 25',
        'jackbox 26',
        'jackbox 27',
        'jackbox 28',
        'jackbox 29',
        'jackbox 30',
        'jackbox 31',
        'jackbox 32',
        'jackbox 33',
        'jackbox 34',
        'jackbox 35',
        'jackbox 36',
        'jackbox 37',
        'jackbox 38',
        'jackbox 39',
        'jackbox 40'
    ];

    bingoListJackbox = [..._.sample(jackboxTiles, 25)];
    console.log('bingoListJackbox loaded ' + bingoListJackbox.length  + ' tiles');
}