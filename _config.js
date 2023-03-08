var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb://SGumbe:Ziza2015.@ac-yk8mriz-shard-00-00.dxfb7mn.mongodb.net:27017,ac-yk8mriz-shard-00-01.dxfb7mn.mongodb.net:27017,ac-yk8mriz-shard-00-02.dxfb7mn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1d1hbr-shard-0&authSource=admin&retryWrites=true&w=majority',
    development: 'mongodb://SGumbe:Ziza2015.@ac-yk8mriz-shard-00-00.dxfb7mn.mongodb.net:27017,ac-yk8mriz-shard-00-01.dxfb7mn.mongodb.net:27017,ac-yk8mriz-shard-00-02.dxfb7mn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1d1hbr-shard-0&authSource=admin&retryWrites=true&w=majority',
    test: 'mongodb://SGumbe:Ziza2015.@ac-yk8mriz-shard-00-00.dxfb7mn.mongodb.net:27017,ac-yk8mriz-shard-00-01.dxfb7mn.mongodb.net:27017,ac-yk8mriz-shard-00-02.dxfb7mn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1d1hbr-shard-0&authSource=admin&retryWrites=true&w=majority',
}
module.exports = config;
