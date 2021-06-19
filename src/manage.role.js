var manageRole = {
    run: function() {
        // Contains all Creeps
        var creepers = Game.creeps;
        console.log('Total Creeps: ' + Object.keys(creepers).length);

        // Contains all Harvesters
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length + (harvesters.length / Object.keys(creepers).length) + "%");

        // Contains all Builders
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('Builders: ' + builders.length + (builders.length / Object.keys(creepers).length) + "%");

        // Contains all Builders
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('Upgraders: ' + upgraders.length + (harvesters.length / Object.keys(creepers).length) + "%");

        if(Object.keys(creepers).length<10){
            // Keeps Harvesters at 50%
            if(creepers.length==0 || !Game.spawns['Spawn1'].spawning && (harvesters.length / Object.keys(creepers).length)<0.5) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new harvester: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvester'}});
            }

            // Keeps Builders at 25%
            if(creepers.length==0 || !Game.spawns['Spawn1'].spawning && (builders.length / Object.keys(creepers).length)<0.25) {
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'builder'}});        
            }

            // Keeps Upgraders at 25%
            if(creepers.length==0 || !Game.spawns['Spawn1'].spawning && (upgraders.length / Object.keys(creepers).length)<0.25) {
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'upgrader'}});        
            }
        }
    }
};

module.exports = manageRole;
