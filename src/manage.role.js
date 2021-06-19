var manageRole = {
    run: function() {
        if(Object.keys(creepers).length<10 && !Game.spawns['Spawn1'].spawning && Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', { dryRun: true })
            // Keeps Harvesters at 50%
            if(Object.keys(creepers).length==0 || (harvesters.length / Object.keys(creepers).length)<0.5) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new harvester: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});
            } // Keeps Builders at 25%
            else if((builders.length / Object.keys(creepers).length)<0.25){            
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'builder'}});        
            } // Keeps Upgraders at 25%
            else if((upgraders.length / Object.keys(creepers).length)<0.25) {
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'upgrader'}});        
            }
        }
    }
};

module.exports = manageRole;
