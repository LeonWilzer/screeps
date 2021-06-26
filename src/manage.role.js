var manageRole = {
    run: function() {
        var totalCreeps = Game.creeps;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var maintainers = _.filter(Game.creeps, (creep) => creep.memory.role == 'maintainer');
        var warriors = _.filter(Game.creeps, (creep) => creep.memory.role == 'warrior');
        
        const spawn = Game.spawns['Spawn1'];
        const room = spawn.room;

        var energyBudget;
        if(Object.keys(totalCreeps).length<6)
            energyBudget = 300;
        else
            energyBudget = room.energyCapacityAvailable;

        let creepStdConfig = [];
        while(energyBudget>0)
        {
            if(energyBudget>=100)
            {
                energyBudget -= 100;
                creepStdConfig.push(WORK);
            }
            if(energyBudget>=50)
            {
                energyBudget -= 50;
                creepStdConfig.push(CARRY);
            }
            if(energyBudget>=50)
            {
                energyBudget -= 50;
                creepStdConfig.push(MOVE);
            }
        }

        var energyBudget;
        if(Object.keys(totalCreeps).length<6)
            energyBudget = 300;
        else
            energyBudget = room.energyCapacityAvailable;

        let creepWarConfig = []
        while(energyBudget>0)
        {
            if(energyBudget>=50)
            {
                energyBudget -= 50;
                creepWarConfig.push(MOVE);
            }
            if(energyBudget>=80)
            {
                energyBudget -= 50;
                creepWarConfig.push(ATTACK);
            }
            if(energyBudget>=600)
            {
                energyBudget -= 600;
                creepWarConfig.push(CLAIM);
            }
            if(energyBudget>=150)
            {
                energyBudget -= 150;
                creepWarConfig.push(RANGED_ATTACK);
            }
            if(energyBudget>=250)
            {
                energyBudget -= 250;
                creepWarConfig.push(HEAL);
            }
            if(energyBudget>=10)
            {
                energyBudget -= 10;
                creepWarConfig.push(TOUGH);
            }
        }

        if(spawn.spawnCreep(creepStdConfig, 'Worker1', { dryRun: true })==0){
            // Keeps Harvesters at 50%
            if(Object.keys(totalCreeps).length==0 || (harvesters.length / Object.keys(totalCreeps).length)<=0.5) {
                var newName = 'Harvester' + Game.time;
                console.log('Spawning new Harvester: ' + newName);
                spawn.spawnCreep(creepStdConfig, newName, 
                {memory: {role: 'harvester', state: 0}});
            } // Keeps Builders at 15%
            else if((builders.length / Object.keys(totalCreeps).length)<=0.15){
                var newName = 'Builder' + Game.time;
                console.log('Spawning new Builder: ' + newName);
                spawn.spawnCreep(creepStdConfig, newName, 
                {memory: {role: 'builder', state: 0}});        
            } // Keeps Upgraders at 15%
            else if((upgraders.length / Object.keys(totalCreeps).length)<=0.15){
                var newName = 'Upgrader' + Game.time;
                console.log('Spawning new Upgrader: ' + newName);
                spawn.spawnCreep(creepStdConfig, newName, 
                {memory: {role: 'upgrader', state: 0}});        
            } // Maintainer 10%
            else if((maintainers.length / Object.keys(totalCreeps).length)<=0.1){
                var newName = 'Maintainer' + Game.time;
                console.log('Spawning new Maintainer: ' + newName);
                spawn.spawnCreep(creepStdConfig, newName, 
                {memory: {role: 'maintainer', state: 0}});  
            }
            else if((warriors.length / Object.keys(totalCreeps).length)<=0.1){
                var newName = 'Warrior' + Game.time;
                console.log('Spawning new Warrior: ' + newName);
                spawn.spawnCreep(creepWarConfig, newName, 
                {memory: {role: 'Warrior', state: 0}});  
            }
        }
    }
};

module.exports = manageRole;
