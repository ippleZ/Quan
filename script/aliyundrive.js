var body = $response.body;
var jsonData = JSON.parse(body);

// 修改“我”部分昵称旁边图标
if ($request.url.indexOf('/users/me') !== -1) {
    body = body.replace(/\"membershipIdentity":".*?"/g, '\"membershipIdentity":"svip"')
                .replace(/\"membershipIcon":".*?"/g, '\"membershipIcon":"https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png"')
                .replace(/\"badges":\[.+\]/g, '\"badges":[ { "code" : "member-shi", "defaultIcon" : "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png", "iconText" : null, "iconTemplate" : null }]');
}

// 去除“我”部分插条
if ($request.url.indexOf('/users/tools') !== -1) {
    delete jsonData.result.guideInfo;
    body = JSON.stringify(jsonData);
}

// 购买页面的SVIP
if ($request.url.indexOf('/users/vip/info') !== -1) {
    body = body.replace(/\{.+\}/g, '\{ "status" : "normal", "identity" : "svip", "icon" : "https://gw.alicdn.com/imgextra/i3/O1CN01iPKCuZ1urjDgiry5c_!!6000000006091-2-tps-60-60.png", "level" : "8t", "vipList" : [ { "code" : "svip.8t", "promotedAt" : 1691769901, "expire" : 4092599349, "name" : "超级会员" } ], "mediumIcon" : "https://gw.alicdn.com/imgextra/i4/O1CN01Mk916Y1c99aVBrgxM_!!6000000003557-2-tps-222-60.png" \}');
}

// 我的页面SVIP
if ($request.url.indexOf('/users/me/vip/info') !== -1) {
    body = body.replace(/\{.+\}/g, '\{ "description" : "有效期至2099-09-09", "titleNotice" : "", "activityAction" : "smartdrive://webview?url=https%3A%2F%2Fpages.aliyundrive.com%2Fmobile-page%2Fweb%2Fmembership.html%3FdisableNav%3DYES%26renew%3DYES", "rightButtonText" : "SVIP", "activityText" : "解锁部分功能，不完全解锁", "identity" : "svip", "backgroundImage" : "https://gw.alicdn.com/imgextra/i4/O1CN01cwAW0u1GPG2oa6WW7_!!6000000000614-2-tps-654-212.png", "titleImage" : "https://gw.alicdn.com/imgextra/i2/O1CN01snE6rA1pVg95HyRBl_!!6000000005366-2-tps-214-49.png", "backgroudImage" : null \}');
}

// 用户详情中修改VIP身份
if ($request.url.indexOf('/user/get') !== -1) {
    body = body.replace(/\"vip_identity":".*?"/g, '\"vip_identity":"svip"');
}

// 修改播放信息
if ($request.url.indexOf('/users/feature/list') !== -1) {
    body = body.replace(/\"name":".*?"/g, '\"name":"svip"').replace(/\"intercept":\w+/g, '\"intercept":false');
}

// 修改用户容量信息
if ($request.url.indexOf('/user/getUserCapacityInfo') !== -1) {
    jsonData.capacity_level_info = { "capacity_type" : "normal" };
    jsonData.user_capacity_limit_details = { "limit_download" : false, "limit_consume" : false };
    body = JSON.stringify(jsonData);
}

// 删除横条信息
if ($request.url.indexOf('/users/onboard_list') !== -1) {
    delete jsonData.result;
    body = JSON.stringify(jsonData);
}

// 过滤主页项目
if ($request.url.indexOf('/users/home/widgets') !== -1) {
    jsonData.coreFeatures.items = jsonData.coreFeatures.items.filter(item => item.code !== "AI_ASSISTANT");
    delete jsonData.signIn;
    delete jsonData.banners;
    delete jsonData.minorBackup;
    delete jsonData.mainBackup;
    body = JSON.stringify(jsonData);
}

$done({ body });