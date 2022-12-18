var bingoListVRChat;
var q, w, e, r, t

function VRChat() {

    q = _.sample(['vrchat q 1','vrchat q 2','vrchat q 3','vrchat q 4','vrchat q 5'], 5);
    w = _.sample(['vrchat w 1','vrchat w 2','vrchat w 3','vrchat w 4','vrchat w 5'], 5);
    e = _.sample(['vrchat e 1','vrchat e 2','vrchat e 3','vrchat e 4','vrchat e 5'], 5);
    r = _.sample(['vrchat r 1','vrchat r 2','vrchat r 3','vrchat r 4','vrchat r 5'], 5);
    t = _.sample(['vrchat t 1','vrchat t 2','vrchat t 3','vrchat t 4','vrchat t 5'], 5);

    bingoListVRChat = [...q, ...w, ...e, ...r, ...t];
    console.log('bingoListVRChat = ' + bingoListVRChat);
}