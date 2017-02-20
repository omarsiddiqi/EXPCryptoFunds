var ProofOfExistence1 = artifacts.require("./ProofOfExistence1.sol");

module.exports = function(callback){
    var _instance = null;
    var _randomString = "Random String " + Math.random();
    ProofOfExistence1.new().then(function(instance){
        _instance = instance;
        console.log("notarize");
        return instance.notarize(_randomString);
    }).then(function(result){
        console.log(result);
        console.log('calculateProof');
        return _instance.calculateProof(_randomString);
    }).then(function(result){
        console.log('calculateProof result ' + result);            
        return _instance.proof();
    }).then(function(result){
        console.log('Proof result ' + result);    
    });
}
