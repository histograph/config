const config=require("./index.js");

const defaultMapping = require('./default-mapping.json');

var getESconf = function(){

  if (config.elasticsearch.number_of_shards != null){
    defaultMapping.settings.number_of_shards = config.elasticsearch.number_of_shards;
  }

  if (config.elasticsearch.number_of_replicas != null){
    defaultMapping.settings.number_of_replicas = config.elasticsearch.number_of_replicas;
  }

  if (config.elasticsearch.precision != null){
    defaultMapping.mappings._default_.properties.geometry.precision = config.elasticsearch.precision;
  }

 return defaultMapping;

}

// console.log("type: " + JSON.stringify(getESconf()));

module.exports = getESconf;
