function meetingRooms(rooms, need) {
    let result = [];
    for (let i = 0; i < rooms.length; i++) {
        let occupants = rooms[i][0].split('').filter(char => char === 'X').length;
        let chairs = rooms[i][1];
        let spareChairs = chairs - occupants;
        if (spareChairs >= need) {
            result.push(need);
            need = 0;
        } else {
            result.push(spareChairs);
            need -= spareChairs;
        }
        if (need === 0) break;
    }
    // If still need chairs, fill the remaining rooms with 0 taken chairs
    while (result.length < rooms.length) {
        result.push(0);
    }
    return result;
}

const rooms = [
    ['XXX', 3],
    ['XXXXX', 6],
    ['XXXXXX', 9],
    ['XXX', 2]
];
const need = 4;
console.log(meetingRooms(rooms, need));
