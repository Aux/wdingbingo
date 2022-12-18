var bingoListGeneric;
var q, w, e, r, t

function Generic() {

    q = _.sample(['generic q 1','generic q 2','generic q 3','generic q 4','generic q 5'], 5);
    w = _.sample(['generic w 1','generic w 2','generic w 3','generic w 4','generic w 5'], 5);
    e = _.sample(['generic e 1','generic e 2','generic e 3','generic e 4','generic e 5'], 5);
    r = _.sample(['generic r 1','generic r 2','generic r 3','generic r 4','generic r 5'], 5);
    t = _.sample(['generic t 1','generic t 2','generic t 3','generic t 4','generic t 5'], 5);

    bingoListGeneric = [...q, ...w, ...e, ...r, ...t];
    console.log('bingoListGeneric = ' + bingoListGeneric);
}