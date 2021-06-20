var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄');
        }
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
            creep.say('🚧');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            var repairs = _.filter(creep.room.find(FIND_MY_STRUCTURES), (struct) => (struct.hits/struct.hitsMax)<0 && struct.structureType!=STRUCTURE_ROAD);
            if(repairs.length)
            {
                if(creep.repair(repairs[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(repairs[0], {visualizePathStyle: {stroke: '#ff8300'}});
                }
            }
            else if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#f1f509'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#566600'}});
            }
        }
    }
};

module.exports = roleBuilder;
