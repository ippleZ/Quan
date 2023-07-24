var obj = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    obj.vip = {
    "expires_time" : "4092599349",
    "is_auto_renewal" : true
  };
    obj.svip = {
    "expires_time" : "4092599349",
    "is_auto_renewal" : true
  };
}

if ($request.url.indexOf(adhf) != -1){
    obj.activities = [];
}

if ($request.url.indexOf('user') != -1){
    obj.result.ranking_above = 99;
    obj.result.is_vip = true;
    obj.result.vip_expired_at = 4092599349;
    obj.result.svip_given = 9999;
    obj.result.is_xy_vip = true;
    obj.result.xy_svip_expire = 4092599349; 
    obj.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    obj.result.wt.svip_given = 9999;
    obj.result.wt.ranking_above = 99;
    obj.result.is_phone_verified = true;
    obj.result.phone_num = "13145200000";
    obj.result.vip_take_effect = 1;
    obj.result.is_primary = true;
    obj.result.xy_vip_expire = 4092599349;
    obj.result.svip_expired_at = 4092599349;
    obj.result.svip_take_effect = 1;
    obj.result.vip_type = "s";
}

$done({ body: JSON.stringify(obj)});
