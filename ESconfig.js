var config=require("./index.js");

var defaultMapping = require('./default-mapping.json');

var getESconf = function(){

  if (config.elasticsearch.number_of_shards != null){
    defaultMapping.settings.number_of_shards = config.elasticsearch.number_of_shards;
  }

  if (config.elasticsearch.number_of_replicas != null){
    defaultMapping.settings.number_of_replicas = config.elasticsearch.number_of_replicas;
  }

 return defaultMapping;

}

// console.log("type: " + JSON.stringify(getESconf()));

module.exports = getESconf;
