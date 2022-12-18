var bingoListJackbox;
var q, w, e, r, t

function Jackbox() {

    q = _.sample(['jackbox q 1','jackbox q 2','jackbox q 3','jackbox q 4','jackbox q 5'], 5);
    w = _.sample(['jackbox w 1','jackbox w 2','jackbox w 3','jackbox w 4','jackbox w 5'], 5);
    e = _.sample(['jackbox e 1','jackbox e 2','jackbox e 3','jackbox e 4','jackbox e 5'], 5);
    r = _.sample(['jackbox r 1','jackbox r 2','jackbox r 3','jackbox r 4','jackbox r 5'], 5);
    t = _.sample(['jackbox t 1','jackbox t 2','jackbox t 3','jackbox t 4','jackbox t 5'], 5);

    bingoListJackbox = [...q, ...w, ...e, ...r, ...t];
    console.log('bingoListJackbox = ' + bingoListJackbox);
}