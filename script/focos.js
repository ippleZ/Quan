var obj = JSON.parse($response.body);

obj["me"]["active_subscriptions_ids"] = ["com.focos.1y_t130_bundle_creator"];
obj["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : "com.focos.1y_t130_bundle_creator",
   "features" : ["unlock"]
  }];
obj["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09.09+00:00";

$done({body : JSON.stringify(obj)});
