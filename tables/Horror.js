var bingoListHorror;
var q, w, e, r, t

function Horror() {

    q = _.sample(['horror q 1','horror q 2','horror q 3','horror q 4','horror q 5'], 5);
    w = _.sample(['horror w 1','horror w 2','horror w 3','horror w 4','horror w 5'], 5);
    e = _.sample(['horror e 1','horror e 2','horror e 3','horror e 4','horror e 5'], 5);
    r = _.sample(['horror r 1','horror r 2','horror r 3','horror r 4','horror r 5'], 5);
    t = _.sample(['horror t 1','horror t 2','horror t 3','horror t 4','horror t 5'], 5);

    bingoListHorror = [...q, ...w, ...e, ...r, ...t];
    console.log('bingoListHorror = ' + bingoListHorror);
}