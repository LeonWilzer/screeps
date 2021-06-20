var manageBuildings = {
    run: function()
    {
        var obj = Game.rooms;
        var roomArr = [];

        for( let i in obj ) {
           roomArr.push(i);
           roomArr.push(obj[i]);
        }

        for (let r in roomArr)
        {
        }
    }
};
module.exports = manageBuildings;
