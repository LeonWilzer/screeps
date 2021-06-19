var manageRole = {
    run: function() {
        var totalCreeps = Game.creeps;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        if(Object.keys(totalCreeps).length<10 && !Game.spawns['Spawn1'].spawning && Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', { dryRun: true })){
            // Keeps Harvesters at 50%
            if(Object.keys(totalCreeps).length==0 || (harvesters.length / Object.keys(totalCreeps).length)<0.5) {
                var newname = 'harvester' + game.time;
                console.log('spawning new harvester: ' + newname);
                game.spawns['spawn1'].spawncreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});
            } // Keeps Builders at 25%
            else if((builders.length / Object.keys(totalCreeps).length)<0.25){            
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'builder'}});        
            } // Keeps Upgraders at 25%
            else if((upgraders.length / Object.keys(totalCreeps).length)<0.25) {
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'upgrader'}});        
            }
        }
    }
};

module.exports = manageRole;
