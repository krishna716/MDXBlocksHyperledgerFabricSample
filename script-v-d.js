/**
* Send from one participant to another
* @param {org.hyperledger_composer1.scms.SubmitP1} SubmitP1 - the trade product transaction
* @transaction
*/
function SubmitP1(SubmitP1) {
SubmitP1.product.owner = SubmitP1.newowner; //
return
getAssetRegistry('org.hyperledger_composer1.scms.Product').then(function (assetRegistry) {
return
assetRegistry.update(SubmitP1.product1);

});
}