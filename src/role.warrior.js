var roleWarrior = {
    run: function(creep) {
        const hostPower = creep.find(FIND_HOSTILE_POWER_CREEPS);
        const hostCreeps = creep.find(FIND_HOSTILE_CREEPS);
        const hostStructs = creep.find(FIND_HOSTILE_STRUCTURES);
        const hostSpawns = creep.find(FIND_HOSTILE_SPAWNS);
        const hostSites = creep.find(FIND_HOSTILE_CONSTRUCTION_SITES);
        const target = null;

        if(hostPower.length)
            target = hostPower[0];
        else if(hostCreep.length)
            target = hostCreeps[0];
        else if(hostStructs.length)
            target = hostStructs[0];
        else if(hostSpawns.length)
            target = hostSpawns[0];
        else if(hostSites.length)
            target = hostSites[0];

        if(target != null)
        {
            if(creep.attack(target) != ERR_NOT_IN_RANGE && creep.rangedAttack(target)==ERR_NOT_IN_RANGE)
                creep.moveTo(target);
        }
        else
        {
            moveTo(Game.flags[0]);
        }
    }
};

module.exports = roleWarrior;
