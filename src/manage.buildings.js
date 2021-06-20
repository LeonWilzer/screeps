var manageBuildings = {
    run: function()
    {
        var obj = Game.rooms;
        var array = [];

        for( let i in obj ) {
           array.push(i);
           array.push(obj[i]);
        }

        var roomArr = array;

        for (let r in roomArr)
        {
            for(let x; x<50; x++)
            {
                for(let y; y<50; y++)
                {
                    if(roomArr[r].lookFor(creep)!=null)
                    {
                        Memory.visits[x][y] += 1;
                        if(Memory.visits[x][y]>10)
                            roomArr[r].createConstructionSite(x, y, STRUCTURE_ROAD);
                    }
                }
            }
        }
    }
};
module.exports = manageBuildings;
