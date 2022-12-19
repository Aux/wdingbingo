var bingoListHorror;
var horrorTiles;

function Horror() {

    horrorTiles = [
        'horror 1',
        'horror 2',
        'horror 3',
        'horror 4',
        'horror 5',
        'horror 6',
        'horror 7',
        'horror 8',
        'horror 9',
        'horror 10',
        'horror 11',
        'horror 12',
        'horror 13',
        'horror 14',
        'horror 15',
        'horror 16',
        'horror 17',
        'horror 18',
        'horror 19',
        'horror 20',
        'horror 21',
        'horror 22',
        'horror 23',
        'horror 24',
        'horror 25',
        'horror 26',
        'horror 27',
        'horror 28',
        'horror 29',
        'horror 30',
        'horror 31',
        'horror 32',
        'horror 33',
        'horror 34',
        'horror 35',
        'horror 36',
        'horror 37',
        'horror 38',
        'horror 39',
        'horror 40'
    ];

    bingoListHorror = [..._.sample(horrorTiles, 25)];
    console.log('bingoListHorror loaded ' + bingoListHorror.length  + ' tiles');
}