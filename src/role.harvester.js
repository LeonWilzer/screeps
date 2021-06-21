var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        switch(creep.memory.state)
        {
            case 0:
                if(creep.store.getFreeCapacity() == 0) {
                    creep.memory.state = 1;
                    break;
                }
                var sources = creep.room.find(FIND_SOURCES);
                var tombs = creep.room.find(FIND_TOMBSTONES);
                if(tombs.length > 0 && creep.withdraw(tombs[0],RESOURCE_ENERGY == ERR_NOT_IN_RANGE))
                    creep.moveTo(tombs[0], {visualizePathStyle: {stroke: '#5ec283'}});
                else if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE)
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#5ec283'}});
                break;

            case 1: 
                if(creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
                    creep.memory.state = 0;
                    break;
                }

                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });

                if(targets.length > 0) {
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#d9eddf'}});
                }
                break;
        }
    }
};

module.exports = roleHarvester;
