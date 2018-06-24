/**
* Send from one participant to another
* @param {org.hyperledger_composer2.scms.SubmitP2} SubmitP2 - the trade product transaction
* @transaction
*/
function SubmitP2(SubmitP2) {
SubmitP2.product.newOwner = SubmitP2.newOwner2; //
return
getAssetRegistry('org.hyperledger_composer2.scms.Product').then(function (assetRegistry) {
return
assetRegistry.update(SubmitP2.product);

});
}