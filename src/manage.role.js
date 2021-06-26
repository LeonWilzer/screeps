var manageRole = {
    run: function() {
        var totalCreeps = Game.creeps;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var maintainers = _.filter(Game.creeps, (creep) => creep.memory.role == 'maintainer');
        
        const spawn = Game.spawns['Spawn1'];
        const room = spawn.room;

        var energyBudget;
        if(Object.keys(totalCreeps).length<6)
            energyBudget = 300;
        else
            energyBudget = room.energyCapacityAvailable;

        var creepConfig = [];
        while(energyBudget>0)
        {
            if(energyBudget>=100)
            {
                energyBudget -= 100;
                creepConfig.push(WORK);
            }
            if(energyBudget>=50)
            {
                energyBudget -= 50;
                creepConfig.push(CARRY);
            }
            if(energyBudget>=50)
            {
                energyBudget -= 50;
                creepConfig.push(MOVE);
            }
        }

        if(spawn.spawnCreep(creepConfig, 'Worker1', { dryRun: true })==0){
            // Keeps Harvesters at 40%
            if(Object.keys(totalCreeps).length==0 || (harvesters.length / Object.keys(totalCreeps).length)<=0.5) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new Harvester: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'harvester', state: 0}});
            } // Keeps Builders at 20%
            else if((builders.length / Object.keys(totalCreeps).length)<=0.2){
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'builder', state: 0}});        
            } // Keeps Upgraders at 20%
            else if((upgraders.length / Object.keys(totalCreeps).length)<=0.2){
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'upgrader', state: 0}});        
            } // Maintainer 20%
            else if((maintainers.length / Object.keys(totalCreeps).length)<=0.1){
                var newName = 'Maintainer' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'maintainer', state: 0}});  
            }
        }
    }
};

module.exports = manageRole;
