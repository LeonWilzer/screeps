var manageRole = {
    run: function() {
        var totalCreeps = Game.creeps;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        const spawn = Game.spawns['Spawn1'];

        //var energyBudget = spawn.GenergyCapacityAvailable;
        var energyBudget = 550;
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
            // Keeps Harvesters at 50%
            if(Object.keys(totalCreeps).length==0 || (harvesters.length / Object.keys(totalCreeps).length)<=0.5) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new Harvester: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'harvester'}});
            } // Keeps Builders at 25%
            else if((builders.length / Object.keys(totalCreeps).length)<=0.25){
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'builder'}});        
            } // Keeps Upgraders at 25%
            else if((upgraders.length / Object.keys(totalCreeps).length)<=0.25){
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn.spawnCreep(creepConfig, newName, 
                {memory: {role: 'upgrader'}});        
            }
        }
    }
};

module.exports = manageRole;
