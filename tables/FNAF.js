var bingoListFNAF;
var fnafTiles;

function FNAF() {

    fnafTiles = [
        'fnaf 1',
        'fnaf 2',
        'fnaf 3',
        'fnaf 4',
        'fnaf 5',
        'fnaf 6',
        'fnaf 7',
        'fnaf 8',
        'fnaf 9',
        'fnaf 10',
        'fnaf 11',
        'fnaf 12',
        'fnaf 13',
        'fnaf 14',
        'fnaf 15',
        'fnaf 16',
        'fnaf 17',
        'fnaf 18',
        'fnaf 19',
        'fnaf 20',
        'fnaf 21',
        'fnaf 22',
        'fnaf 23',
        'fnaf 24',
        'fnaf 25',
        'fnaf 26',
        'fnaf 27',
        'fnaf 28',
        'fnaf 29',
        'fnaf 30',
        'fnaf 31',
        'fnaf 32',
        'fnaf 33',
        'fnaf 34',
        'fnaf 35',
        'fnaf 36',
        'fnaf 37',
        'fnaf 38',
        'fnaf 39',
        'fnaf 40'
    ];

    bingoListFNAF = [..._.sample(fnafTiles, 25)];
    console.log('bingoListFNAF loaded ' + bingoListFNAF.length  + ' tiles');
}