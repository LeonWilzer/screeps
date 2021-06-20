var manageRole = {
    run: function() {
        var totalCreeps = Game.creeps;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        if(Object.keys(totalCreeps).length<100 && !Game.spawns['Spawn1'].spawning && Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY,MOVE, MOVE], 'Worker1', { dryRun: true })==0){
            // Keeps Harvesters at 50%
            if(Object.keys(totalCreeps).length==0 || (harvesters.length / Object.keys(totalCreeps).length)<=0.25) {
                var newName = 'harvester' + Game.time;
                console.log('Spawning new Harvester: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, 
                {memory: {role: 'harvester'}});
            } // Keeps Builders at 25%
            else if((builders.length / Object.keys(totalCreeps).length)<=0.5){
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, 
                {memory: {role: 'builder'}});        
            } // Keeps Upgraders at 25%
            else if((upgraders.length / Object.keys(totalCreeps).length)<=0.25) {
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, 
                {memory: {role: 'upgrader'}});        
            }
        }
    }
};

module.exports = manageRole;
