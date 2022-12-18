var bingoListFNAF;
var q, w, e, r, t

function FNAF() {

    q = _.sample(['fnaf q 1','fnaf q 2','fnaf q 3','fnaf q 4','fnaf q 5'], 5);
    w = _.sample(['fnaf w 1','fnaf w 2','fnaf w 3','fnaf w 4','fnaf w 5'], 5);
    e = _.sample(['fnaf e 1','fnaf e 2','fnaf e 3','fnaf e 4','fnaf e 5'], 5);
    r = _.sample(['fnaf r 1','fnaf r 2','fnaf r 3','fnaf r 4','fnaf r 5'], 5);
    t = _.sample(['fnaf t 1','fnaf t 2','fnaf t 3','fnaf t 4','fnaf t 5'], 5);

    bingoListFNAF = [...q, ...w, ...e, ...r, ...t];
    console.log('bingoListFNAF = ' + bingoListFNAF);
}