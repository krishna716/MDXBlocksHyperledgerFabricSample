/**
* Send from one participant to another
* @param {org.hyperledger_composer.scms.SubmitP} SubmitP - the trade product transaction
* @transaction
*/
function SubmitP(SubmitP) {
SubmitP.product.owner = SubmitP.newOwner; //
return
getAssetRegistry('org.hyperledger_composer.scms.Product').then(function (assetRegistry) {
return
assetRegistry.update(SubmitP.product);

});
}

