var responseJson = JSON.parse($response.body);
const vip1Endpoint = '/list_purchase_info';
const vip2Endpoint = '/overview';
const flkjEndpoint = '/spaces';

if ($request.url.indexOf(vip1Endpoint) !== -1) {
    responseJson.data["merchandises"] = [
        {
            "sku_key": "12",
            "expire_time": 4092599349,
            "effect_time": 4092599349,
            "name": "稻壳会员",
            "type": "vip"
        },
        {
            "sku_key": "20",
            "expire_time": 4092599349,
            "effect_time": 4092599349,
            "name": "WPS会员",
            "type": "vip"
        },
        {
            "sku_key": "40",
            "expire_time": 4092599349,
            "effect_time": 4092599349,
            "name": "超级会员",
            "type": "vip"
        },
        {
            "sku_key": "vip_pro_plus",
            "expire_time": 4092599349,
            "effect_time": 4092599349,
            "name": "WPS超级会员Pro套餐",
            "type": "vip"
        }
    ];
}

if ($request.url.indexOf(vip2Endpoint) !== -1) {
    responseJson["privilege"] = [
        {
            "times": 541826,
            "spid": "data_recover",
            "expire_time": 4092599349
        },
        // ... (其他特权)
    ];
    responseJson["level"] = 3;
    responseJson["vip"] = {
        "memberid": 40,
        "expire_time": 4092599349,
        "name": "超级会员",
        "has_ad": 0,
        "enabled": [
            {
                "name": "超级会员",
                "memberid": 40,
                "expire_time": 4092599349
            },
            // ... (其他启用的会员)
        ]
    };
}

if ($request.url.indexOf(flkjEndpoint) !== -1) {
    responseJson["total"] = 1100585369600;
}

$done({ body: JSON.stringify(responseJson) });
